import { routes } from "@/src/utils";

interface NavigationItem {
  name: string;
  path: string;
  disabled?: boolean;
  isNew?: boolean;
}

export const navigationItems: NavigationItem[] = [
  { name: "Docs", path: routes.docs.installation },
  { name: "Components", path: routes.docs.components.accordion },
  { name: "Colors", path: routes.colors },
  { name: "Showcase", path: routes.showcase },
];
export const mobileNavigationItems: {
  name: string;
  items: NavigationItem[];
}[] = [
  {
    name: "",
    items: [
      { name: "Colors", path: routes.colors },
      { name: "Showcase", path: routes.showcase },
    ],
  },
  {
    name: "Documentation",
    items: [
      { name: "Installation", path: routes.docs.installation },
      { name: "Fonts", path: routes.docs.fonts },
      { name: "MCP Server", path: routes.docs.mcpServer },
      { name: "Contributing", path: routes.docs.contributing },
    ],
  },
  {
    name: "Components",
    items: [
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
      { name: "Drawer", path: routes.docs.components.drawer },
      { name: "Empty", path: routes.docs.components.empty },
      { name: "Hover Card", path: routes.docs.components.hoverCard },
      { name: "Input", path: routes.docs.components.input },
      { name: "Kbd", path: routes.docs.components.kbd },
      { name: "Label", path: routes.docs.components.label },
      { name: "Menubar", path: routes.docs.components.menubar },
      { name: "Popover", path: routes.docs.components.popover },
      { name: "Select", path: routes.docs.components.select },
      { name: "Spinner", path: routes.docs.components.spinner },
      { name: "Text Area", path: routes.docs.components.textarea },
      { name: "Toast", path: routes.docs.components.toast },
      { name: "Tooltip", path: routes.docs.components.tooltip },
      { name: "More coming soon...", path: "/", disabled: true },
    ],
  },
];
