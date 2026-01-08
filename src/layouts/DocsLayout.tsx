import { DESKTOP_BREAKPOINT, useMediaquery } from "@/hooks/use-mediaquery";
import { cn } from "@/lib/utils";
import { ConstructionIcon, Sparkles } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "./constants";

const DocsLayout = () => {
  const [currentLink, setCurrentLink] = useState(window.location.pathname);
  const isSmallDevice = useMediaquery({ breakpoint: DESKTOP_BREAKPOINT });
  const posthog = usePostHog();

  return (
    <div className="flex w-full xl:max-w-350 mx-auto">
      {!isSmallDevice && (
        <aside className="border-x-2 border-dashed border-foreground/20 p-4 lg:p-12">
          <nav className="flex flex-col gap-4 pixel-font">
            {Object.entries(navItems).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-2">
                <h3 className="w-fit text-foreground/50 border-b-2 mb-2">
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
                        ? "w-fit text-link"
                        : "w-fit text-foreground"
                    )}
                  >
                    <span className={cn(item.workInProgress && "opacity-50")}>
                      {item.name}
                    </span>
                    {item.isNew && (
                      <span className="flex gap-4 text-success">
                        <Sparkles size={"16px"} />
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
          "relative p-4 xl:p-12 w-full xl:min-w-[1000px] border-r-2 border-dashed border-foreground/20",
          isSmallDevice && "mt-16"
        )}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default DocsLayout;
