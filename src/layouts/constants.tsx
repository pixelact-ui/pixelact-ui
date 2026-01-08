import { routes } from "@/src/utils";

export const navItems: {
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
    { name: "Empty", path: routes.docs.components.empty, isNew: true },
    { name: "Hover Card", path: routes.docs.components.hoverCard },
    { name: "Input", path: routes.docs.components.input },
    { name: "Kbd", path: routes.docs.components.kbd, isNew: true },
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
