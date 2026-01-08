import { Button } from "@/components/ui/pixelact-ui/button";
import React from "react";

const Showcase: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 pixel-font bg-background lg:w-350 max-w-350 mx-auto text-foreground gap-8 border-x-2 border-dashed border-foreground/20 p-4 lg:p-12">
      <div className="text-center">
        <h1 className="text-2xl ">Showcase Page</h1>
        <p className="mt-4 text-center">
          On this page will be showcased projects that have used Pixelact UI.
        </p>
      </div>
      <Button
        variant="link"
        onClick={() =>
          window.open("https://forms.gle/siLoaLuoFgPWRd5CA", "_blank")
        }
      >
        Submit your project
      </Button>
    </div>
  );
};

export default Showcase;
