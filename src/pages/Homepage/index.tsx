import ComponentsShowcase from "./components/ComponentsShowcase";
import Features from "./components/Features";
import Hero from "./components/Hero";

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <Hero />
      <Features />
      <ComponentsShowcase />
    </div>
  );
};

export default Homepage;
