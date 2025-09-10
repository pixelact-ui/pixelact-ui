import { cn } from "@/lib/utils";
import ComponentsShowcase from "./components/ComponentsShowcase";
import Hero from "./components/Hero";
import { useIsMobile } from "@/hooks/use-mobile";

const Homepage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(
        "flex flex-col bg-background text-foreground",
        isMobile && "mt-16"
      )}
    >
      <div className="max-w-[1400px] mx-auto border-x-2 border-dashed border-foreground/20">
        <Hero />
        <ComponentsShowcase />
      </div>
    </div>
  );
};

export default Homepage;
