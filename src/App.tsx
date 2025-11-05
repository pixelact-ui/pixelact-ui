import React, { Suspense, useState, useEffect } from "react";
import "highlight.js/styles/github-dark.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "@/src/utils";
import Layout from "./layouts/Layout";
import mdxComponents from "./components/MdxComponents";
import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";
import CookiesBanner from "./components/CookiesBanner";
import DocsLayout from "./layouts/DocsLayout";
import { Spinner } from "@/components/ui/pixelact-ui/spinner";

const LazyHomepage = React.lazy(() => import("./pages/Homepage"));
const LazyNotFound = React.lazy(() => import("./pages/NotFound"));
const LazyShowcase = React.lazy(() => import("./pages/Showcase"));
const LazyColors = React.lazy(() => import("./pages/Colors"));

const contentModules = import.meta.glob("./content/*.mdx");

const SuspenseLoader = () => (
  <div className="absolute top-0 flex items-center justify-center h-full w-full">
    <Spinner className="text-foreground" />
  </div>
);

const contentRoutes = Object.entries(contentModules).map(([path, loader]) => {
  const name = path.match(/\.\/content\/(.*)\.mdx$/)?.[1];
  const Component = React.lazy(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    loader as () => Promise<{ default: React.ComponentType<any> }>
  );
  return {
    path: `/docs/${name}`,
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <Component components={mdxComponents} />
      </Suspense>
    ),
  };
});

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={routes.root}
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          path={routes.root}
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <LazyHomepage />
            </Suspense>
          }
        />
        <Route element={<DocsLayout />}>
          {contentRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route
          path={routes.showcase}
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <LazyShowcase />
            </Suspense>
          }
        />
        <Route
          path={routes.colors}
          element={
            <Suspense fallback={<SuspenseLoader />}>
              <LazyColors />
            </Suspense>
          }
        />
      </Route>
      <Route
        path={routes.notFound}
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <LazyNotFound />
          </Suspense>
        }
      />
    </Routes>
  </BrowserRouter>
);

// List of EU country codes (ISO 3166-1 alpha-2)
const EU_COUNTRIES = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "IS",
  "LI",
  "NO",
  "CH",
];

function App() {
  const [posthogClient, setPosthogClient] = useState<typeof posthog | null>(
    null
  );
  const [showBanner, setShowBanner] = useState(false);
  const [geoChecked, setGeoChecked] = useState(false);

  const initPostHog = () => {
    posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
      api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
      disable_session_recording: true,
      // debug: import.meta.env.MODE === "development",
      capture_exceptions: true,
    });
    setPosthogClient(posthog);
  };

  useEffect(() => {
    // Only run geolocation check once
    if (geoChecked) {
      initPostHog();
      return;
    }
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (EU_COUNTRIES.includes(data.country_code)) {
          // In EU: show banner if not declined
          if (localStorage.getItem("posthog_opt_in") === "false") {
            setShowBanner(true);
          } else if (localStorage.getItem("posthog_opt_in") === "true") {
            initPostHog();
            setShowBanner(false);
          }
        } else {
          // Not in EU: always init PostHog
          initPostHog();
          localStorage.setItem("posthog_opt_in", "true");
          setShowBanner(false);
        }
      })
      .catch(() => {
        // On error, default to showing banner (privacy by default)
        if (localStorage.getItem("posthog_opt_in") !== "false") {
          setShowBanner(true);
        }
      })
      .finally(() => setGeoChecked(true));
  }, [geoChecked]);

  return (
    <>
      {posthogClient ? (
        <PostHogProvider client={posthogClient}>
          <RoutesComponent />
        </PostHogProvider>
      ) : (
        <RoutesComponent />
      )}
      {showBanner && !posthog.__loaded && (
        <CookiesBanner
          onAccept={() => {
            initPostHog();
            localStorage.setItem("posthog_opt_in", "true");
            setShowBanner(false);
          }}
          onDecline={() => {
            localStorage.setItem("posthog_opt_in", "false");
            setShowBanner(false);
          }}
        />
      )}
    </>
  );
}

export default App;
