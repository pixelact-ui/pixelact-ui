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
    }
  },
  showcase: "/showcase",
  notFound: "*",
};

export default routes;