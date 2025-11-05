import Header from "@/src/components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <Outlet />
      <div className="border-t-2 border-dashed border-foreground/20  w-full">
        <footer className="h-16 flex items-center px-4 bg-background text-foreground text-xs max-w-[1400px] mx-auto border-x-2 border-dashed border-foreground/20 ">
          <p className="pixel-font">© 2025 Pixelact UI</p>
        </footer>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
