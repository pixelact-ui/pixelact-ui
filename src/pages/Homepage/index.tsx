import { cn } from "@/lib/utils";
import ComponentsShowcase from "./components/ComponentsShowcase";
import Hero from "./components/Hero";
import { DESKTOP_BREAKPOINT, useMediaquery } from "@/hooks/use-mediaquery";

const Homepage: React.FC = () => {
  const isSmallDevice = useMediaquery({ breakpoint: DESKTOP_BREAKPOINT });

  return (
    <div
      className={cn(
        "flex flex-col bg-background text-foreground",
        isSmallDevice && "mt-16"
      )}
    >
      <div className="max-w-350 mx-auto border-x-2 border-dashed border-foreground/20">
        <Hero />
        <ComponentsShowcase />
      </div>
    </div>
  );
};

export default Homepage;
