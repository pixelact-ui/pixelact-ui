import Header from "@/src/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <Outlet />
      <footer className="py-4 px-8 md:px-12 xl:px-24 bg-foreground text-background dark:bg-foreground dark:text-background text-xs">
        <p className="pixel-font">© 2025 Pixelact UI</p>
      </footer>
    </div>
  );
};

export default Layout;
