import { useIsMobile } from "@/hooks/use-mobile";
import { routes } from "@/src/utils";
import { NavLink } from "react-router-dom";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useCallback, useEffect, useState } from "react";
import { DarkMode, Github, LightMode, Logo, Menu } from "@/src/assets/icons";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  path: string;
  disabled?: boolean;
}

const navigationItems: NavigationItem[] = [
  { name: "Docs", path: routes.docs.installation },
  { name: "Components", path: routes.docs.components.button },
  { name: "Showcase", path: routes.showcase },
];
const mobileNavigationItems: { name: string; items: NavigationItem[] }[] = [
  {
    name: "Documentation",
    items: [
      { name: "Installation", path: routes.docs.installation },
      { name: "Fonts", path: routes.docs.fonts },
      { name: "Contributing", path: routes.docs.contributing },
    ],
  },
  {
    name: "Components",
    items: [
      { name: "Button", path: routes.docs.components.button },
      // { name: "Dialog", path: routes.docs.components.dialog },
      { name: "Input", path: routes.docs.components.input },
      { name: "Text Area", path: routes.docs.components.textarea },
    ],
  },
];

const iconsClassName = "hover:opacity-80 active:scale-90";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    if (theme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [theme]);

  const LightDarkModeIcon = useCallback(() => {
    return isDarkMode ? (
      <DarkMode
        className={cn(iconsClassName, "fill-background")}
        onClick={() => {
          setIsDarkMode(false);
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
          localStorage.setItem("theme", "light");
        }}
      />
    ) : (
      <LightMode
        className={cn(iconsClassName)}
        color="background"
        onClick={() => {
          setIsDarkMode(true);
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }}
      />
    );
  }, [isDarkMode]);

  return (
    <header>
      <nav className="flex gap-12 justify-between items-center h-16 bg-foreground px-8 md:px-12 pixel-font xl:px-24">
        <div className="flex items-center justify-between md:justify-normal w-full gap-12">
          <NavLink to={routes.root} className=" text-xs text-background">
            <Logo width={30} height={30} />
          </NavLink>

          {isMobile ? (
            <div className="flex gap-4">
              <LightDarkModeIcon />
              <Github
                className={cn(iconsClassName, "fill-background")}
                onClick={() =>
                  window.open(
                    "https://github.com/pixelact-ui/pixelact-ui",
                    "__blank"
                  )
                }
              />
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger>
                  <Menu
                    className={cn(iconsClassName)}
                    style={{ color: "var(--background)" }}
                  />
                </DrawerTrigger>
                <DrawerContent className="p-4 gap-6 overflow-auto">
                  {mobileNavigationItems.map((section) => (
                    <div key={section.name}>
                      <div className="mb-2 text-lg text-foreground">
                        {section.name}
                      </div>
                      <ul className="flex flex-col space-y-3 ">
                        {section.items.map((subItem) => (
                          <li
                            key={subItem.path}
                            onClick={() => setIsOpen(false)}
                          >
                            <a
                              href={subItem.path}
                              className="text-foreground/40"
                            >
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </DrawerContent>
              </Drawer>
            </div>
          ) : (
            <ul>
              <div className="flex items-center gap-8 text-xs">
                {navigationItems.map((item) => {
                  return (
                    <div key={item.path} className="relative">
                      {item.disabled ? (
                        <span className="text-background opacity-50 cursor-default">
                          {item.name}
                        </span>
                      ) : (
                        <NavLink
                          to={item.path}
                          className={cn("text-background")}
                        >
                          {item.name}
                        </NavLink>
                      )}
                    </div>
                  );
                })}
              </div>
            </ul>
          )}
        </div>
        {!isMobile && (
          <div className="flex items-center gap-4 cursor-pointer">
            <Github
              className={cn(iconsClassName, "fill-background")}
              onClick={() =>
                window.open(
                  "https://github.com/pixelact-ui/pixelact-ui",
                  "__blank"
                )
              }
            />
            <LightDarkModeIcon />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
