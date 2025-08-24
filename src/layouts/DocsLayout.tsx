import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { routes } from "@/src/utils";
import { ConstructionIcon, Sparkles } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems: {
  [section: string]: {
    name: string;
    path: string;
    workInProgress?: boolean;
    isNew?: boolean;
  }[];
} = {
  "Getting started": [
    { name: "Installation", path: routes.docs.installation },
    { name: "Fonts", path: routes.docs.fonts },
    { name: "Contributing", path: routes.docs.contributing },
  ],
  Components: [
    { name: "Accordion", path: routes.docs.components.accordion },
    { name: "Alert", path: routes.docs.components.alert },
    { name: "Alert Dialog", path: routes.docs.components.alertDialog },
    { name: "Avatar", path: routes.docs.components.avatar },
    { name: "Badge", path: routes.docs.components.badge },
    { name: "Breadcrumb", path: routes.docs.components.breadcrumb },
    { name: "Button", path: routes.docs.components.button },
    { name: "Calendar", path: routes.docs.components.calendar },
    { name: "Card", path: routes.docs.components.card },
    { name: "Carousel", path: routes.docs.components.carousel },
    { name: "Checkbox", path: routes.docs.components.checkbox },
    { name: "Collapsible", path: routes.docs.components.collapsible },
    { name: "Dialog", path: routes.docs.components.dialog },
    { name: "Input", path: routes.docs.components.input },
    { name: "Label", path: routes.docs.components.label },
    { name: "Popover", path: routes.docs.components.popover },
    { name: "Select", path: routes.docs.components.select },
    { name: "Text Area", path: routes.docs.components.textarea },
    { name: "More coming soon", path: "/", workInProgress: true },
  ],
};

export function DocsLayout() {
  const [currentLink, setCurrentLink] = useState(window.location.pathname);
  const isMobile = useIsMobile();
  const posthog = usePostHog();

  return (
    <div className="flex flex-1 max-w-full bg-background">
      {!isMobile && (
        <aside className="min-w-72 border-r-4 border-dashed border-foreground mx-12 px-12 py-12 xl:mx-12">
          <nav className="flex flex-col gap-4 pixel-font">
            {Object.entries(navItems).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-2">
                <h3 className="w-fit text-lg text-foreground border-b-2">
                  {section}
                </h3>
                {items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={(e) => {
                      if (item.workInProgress) {
                        return e.preventDefault();
                      }
                      posthog?.capture("Clicked Documentation Link", {
                        path: item.path,
                      });
                      setCurrentLink(item.path);
                    }}
                    className={cn(
                      "flex items-center gap-4",
                      item.workInProgress && "cursor-default",
                      currentLink === item.path
                        ? "ml-4 w-fit text-link"
                        : "ml-4 w-fit text-foreground"
                    )}
                  >
                    <span className={cn(item.workInProgress && "opacity-50")}>
                      {item.name}
                    </span>
                    {item.isNew && (
                      <span className="flex gap-4 text-green-500 dark:text-green-300">
                        <Sparkles />
                      </span>
                    )}
                    {item.workInProgress && (
                      <ConstructionIcon className="text-yellow-500 dark:text-yellow-300" />
                    )}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
        </aside>
      )}

      <main
        className={cn(
          "p-4 md:px-12 md:py-12 w-full xl:max-w-4xl",
          isMobile && "mt-16"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
}
