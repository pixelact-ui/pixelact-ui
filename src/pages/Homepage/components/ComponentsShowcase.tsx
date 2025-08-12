import { Button } from "@/components/ui/pixelact-ui/button";
import { Input } from "@/components/ui/pixelact-ui/input";
import { Label } from "@/components/ui/pixelact-ui/label";

const ComponentsShowcase = () => {
  return (
    <section className=" border-t-4 border-dashed text-foreground pixel-font p-4 md:p-12 xl:p-24">
      <div className="text-2xl mb-8 md:text-center">Components showcase</div>
      <div className="flex flex-wrap gap-12 md:gap-4">
        <div className="dark:bg-foreground/10 w-full md:w-fit flex-1 p-4  border-4 border-dashed flex flex-col gap-4">
          <h4 className="text-xl mb-4 text-center">Login</h4>
          <div>
            <Label
              htmlFor="username"
              className="text-foreground leading-normal"
            >
              Username
            </Label>
            <Input
              id="username"
              className="w-full"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="text-foreground leading-normal"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="w-full"
              placeholder="••••••••••"
            />
          </div>
          <Button className="w-full">Login</Button>
        </div>
        <div className="dark:bg-foreground/10 flex-1 p-4 w-fit  border-4 border-dashed flex flex-col gap-4">
          <h4 className="text-xl mb-4 text-center">Register</h4>
          <div>
            <Label htmlFor="email" className="text-foreground leading-normal">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="text-foreground leading-normal"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="w-full"
              placeholder="••••••••••"
            />
          </div>
          <div>
            <Label
              htmlFor="confirmPassword"
              className="text-foreground leading-normal"
            >
              Confirm password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              className="w-full"
              placeholder="••••••••••"
            />
          </div>
          <div>
            <Label
              htmlFor="dateOfBirth"
              className="text-foreground leading-normal"
            >
              Date of birth
            </Label>
            <Input type="date" className="w-full" id="dateOfBirth" />
          </div>
          <div className="flex items-center gap-4">
            <Input
              type="checkbox"
              className="p-2 bg-foreground text-background"
            />
            <span className="text-foreground text-sm">
              Accept terms and conditions
            </span>
          </div>
          <Button className="w-full">Register</Button>
        </div>
        <div className="dark:bg-foreground/10 flex-1 p-4 w-fit border-4 border-dashed flex flex-col gap-4">
          <h4 className="text-xl mb-4 text-center">Button</h4>
          <Button className="w-full">Default</Button>
          <Button variant="destructive" className="w-full">
            Destructive
          </Button>
          <Button variant="warning" className="w-full">
            Warning
          </Button>
          <Button variant="success" className="w-full">
            Success
          </Button>
          <Button variant="link" className="w-full">
            Link
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComponentsShowcase;
