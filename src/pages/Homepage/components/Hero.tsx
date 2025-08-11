import { AnimatedGridPattern } from "@/src/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { routes } from "@/src/utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/pixelact-ui/button/button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className={`relative flex flex-col  justify-center md:items-center p-8 md:p-12 xl:px-24 xl:py-36`}
    >
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15}
        strokeDasharray={5}
        duration={5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
          "md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <span className="text-foreground text-3xl xl:text-5xl border-dashed border-b-4 pixel-font">
        Pixelact UI
      </span>
      <p className="mt-4 max-w-2xl text-foreground/50 pixel-font md:text-center">
        A pixel art flavored component library.
      </p>
      <div className="mt-6 flex max-sm:flex-col gap-6">
        <Button
          className="md:min-w-fit"
          onClick={() => navigate(routes.docs.installation)}
        >
          Documentation
        </Button>
      </div>
    </section>
  );
};

export default Hero;
