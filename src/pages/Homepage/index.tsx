import { cn } from "@/lib/utils";
import ComponentsShowcase from "./components/ComponentsShowcase";
import Hero from "./components/Hero";
import { DESKTOP_BREAKPOINT, useMediaquery } from "@/hooks/use-mediaquery";
import { Button } from "@/components/ui/pixelact-ui/button";
import { toast } from "@/components/ui/pixelact-ui/toast";

const Homepage: React.FC = () => {
  const isSmallDevice = useMediaquery({ breakpoint: DESKTOP_BREAKPOINT });

  return (
    <div
      className={cn(
        "flex flex-col bg-background text-foreground",
        isSmallDevice && "mt-16"
      )}
    >
      <div className="max-w-[1400px] mx-auto border-x-2 border-dashed border-foreground/20">
        <Hero />
        <Button onClick={() => toast("This is a toast wow")}>Toast</Button>
        <ComponentsShowcase />
      </div>
    </div>
  );
};

export default Homepage;
