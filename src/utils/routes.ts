interface Routes {
  root: string;
  docs: {
    installation: string;
    fonts: string;
    contributing: string;
    components: {
      button: string;
      textarea: string;
      input: string;
      dialog: string;
      label: string;
      accordion: string;
      alert: string;
      alertDialog: string;
      avatar: string;
      badge: string;
      breadcrumb: string;
      calendar: string;
      select: string;
      card: string;
      carousel: string;
      checkbox: string;
      collapsible: string;
      popover: string;
      command: string;
      contextMenu: string;
    };
  };
  showcase: string;
  notFound: string;
}

const routes: Routes = {
  root: "/",
  docs: {
    installation: "/docs/installation",
    fonts: "/docs/fonts",
    contributing: "/docs/contributing",
    components: {
      button: "/docs/button",
      textarea: "/docs/text-area",
      input: "/docs/input",
      dialog: "/docs/dialog",
      label: "/docs/label",
      accordion: "/docs/accordion",
      alert: "/docs/alert",
      alertDialog: "/docs/alert-dialog",
      avatar: "/docs/avatar",
      badge: "/docs/badge",
      breadcrumb: "/docs/breadcrumb",
      calendar: "/docs/calendar",
      select: "/docs/select",
      card: "/docs/card",
      carousel: "/docs/carousel",
      checkbox: "/docs/checkbox",
      collapsible: "/docs/collapsible",
      popover: "/docs/popover",
      command: "/docs/command",
      contextMenu: "/docs/context-menu",
    }
  },
  showcase: "/showcase",
  notFound: "*",
};

export default routes;