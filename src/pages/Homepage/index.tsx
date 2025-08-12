import { cn } from "@/lib/utils";
import ComponentsShowcase from "./components/ComponentsShowcase";
import Features from "./components/Features";
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
      <Hero />
      <Features />
      <ComponentsShowcase />
    </div>
  );
};

export default Homepage;
