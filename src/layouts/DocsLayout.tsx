import { DESKTOP_BREAKPOINT, useMediaquery } from "@/hooks/use-mediaquery";
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
  "Get started": [
    { name: "Installation", path: routes.docs.installation },
    { name: "Fonts", path: routes.docs.fonts },
    { name: "MCP Server", path: routes.docs.mcpServer },
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
    { name: "Command", path: routes.docs.components.command },
    { name: "Context Menu", path: routes.docs.components.contextMenu },
    { name: "Dialog", path: routes.docs.components.dialog },
    { name: "Drawer", path: routes.docs.components.drawer, isNew: true },
    { name: "Hover Card", path: routes.docs.components.hoverCard },
    { name: "Input", path: routes.docs.components.input },
    { name: "Label", path: routes.docs.components.label },
    { name: "Menubar", path: routes.docs.components.menubar },
    { name: "Popover", path: routes.docs.components.popover },
    { name: "Select", path: routes.docs.components.select },
    { name: "Spinner", path: routes.docs.components.spinner },
    { name: "Text Area", path: routes.docs.components.textarea },
    { name: "Toast", path: routes.docs.components.toast },
    { name: "Tooltip", path: routes.docs.components.tooltip },
    { name: "More coming soon", path: "/", workInProgress: true },
  ],
};

const DocsLayout = () => {
  const [currentLink, setCurrentLink] = useState(window.location.pathname);
  const isSmallDevice = useMediaquery({ breakpoint: DESKTOP_BREAKPOINT });
  const posthog = usePostHog();

  return (
    <div className="flex w-full xl:max-w-[1400px] mx-auto">
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
