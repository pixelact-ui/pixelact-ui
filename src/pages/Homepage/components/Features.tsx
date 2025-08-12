const Features = () => {
  return (
    <section className="p-4 md:p-12 xl:p-24 bg-background border-t-4 border-dashed text-foreground grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative md:after:content-[''] md:after:absolute md:after:h-full md:after:top-0 md:after:right-0 md:after:border-r-4 md:after:border-dashed">
        <span className="text-xl pixel-font">Built on shadcn/ui</span>
        <p className="mt-2 text-foreground">
          Components based on shadcn/ui. Consistent and high-quality user
          experience.
        </p>
      </div>

      <div className="relative after:content-[''] md:after:absolute md:after:h-full md:after:top-0 md:after:right-0 md:after:border-r-4 md:after:border-dashed">
        <span className="text-xl pixel-font">Open source</span>
        <p className="mt-2 text-foreground">
          Fully open source. Contribute, fork, and customize to your heart's
          content.
        </p>
      </div>
      <div>
        <span className="text-xl pixel-font">Composable & Themeable</span>
        <p className="mt-2 text-foreground">
          Extend it, customize it, theme it thanks to Tailwind's power.
        </p>
      </div>
    </section>
  );
};

export default Features;
