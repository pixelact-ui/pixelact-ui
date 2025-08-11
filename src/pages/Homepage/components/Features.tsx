const Features = () => {
  return (
    <section className="p-8 md:p-12 xl:p-24 bg-background border-t-4 border-dashed text-foreground pixel-font grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative md:after:content-[''] md:after:absolute md:after:h-full md:after:top-0 md:after:right-0 md:after:border-r-4 md:after:border-dashed">
        <span className="text-2xl">Built on shadcn/ui</span>
        <p className="mt-2  text-foreground/50">
          Components based on shadcn/ui. Consistent and high-quality user
          experience.
        </p>
      </div>

      <div className="relative after:content-[''] md:after:absolute md:after:h-full md:after:top-0 md:after:right-0 md:after:border-r-4 md:after:border-dashed">
        <span className="text-2xl">Open source</span>
        <p className="mt-2 text-foreground/50">
          Fully open source. Contribute, fork, and customize to your heart's
          content.
        </p>
      </div>
      <div>
        <span className="text-2xl">Composable & Themeable</span>
        <p className="mt-2 text-foreground/50">
          Extend it, customize it, theme it thanks to Tailwind's power.
        </p>
      </div>
    </section>
  );
};

export default Features;
