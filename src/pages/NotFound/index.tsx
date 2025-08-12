import { Button } from "@/components/ui/pixelact-ui/button";
import { routes } from "@/src/utils";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="pixel-font flex flex-col  items-center justify-center h-screen bg-background">
      <h1 className="text-7xl text-foreground">404</h1>
      <p className="mt-4 text-xl text-foreground/50 mb-4">Page Not Found</p>
      <Button variant="link" onClick={() => navigate(routes.root)}>
        Go to Homepage
      </Button>
    </div>
  );
};

export default NotFound;
