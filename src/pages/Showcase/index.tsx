import { Button } from "@/components/ui/pixelact-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/pixelact-ui/card";
import React from "react";
import { projects } from "./constants";

const Showcase: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 pixel-font bg-background lg:w-350 max-w-350 mx-auto text-foreground border-x-2 border-dashed border-foreground/20 p-4 lg:p-12 gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Showcase</h1>
        <p className="text-muted-foreground max-w-xl">
          Projects built with Pixelact UI. Want to be featured here?
        </p>
        <Button
          variant="link"
          onClick={() =>
            window.open("https://forms.gle/siLoaLuoFgPWRd5CA", "_blank")
          }
        >
          Submit your project.
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.url} className="flex flex-col">
            <div className="flex items-center justify-center bg-foreground/5 border-b border-foreground/10 h-40 overflow-hidden px-6">
              <img
                src={project.image}
                alt={project.name}
                className="h-24 w-24 object-contain"
                loading="lazy"
              />
            </div>

            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>

            <CardContent>
              <CardDescription className="leading-relaxed line-clamp-4">
                {project.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="mt-auto pt-4">
              <Button
                className="w-full"
                variant="default"
                onClick={() => window.open(project.url, "_blank")}
              >
                Visit project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
