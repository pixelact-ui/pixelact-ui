import { Button } from "@/components/ui/pixelact-ui/button";
import { Input } from "@/components/ui/pixelact-ui/input";
import { Label } from "@/components/ui/pixelact-ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/pixelact-ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/pixelact-ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/pixelact-ui/alert-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pixelact-ui/avatar";
import { Badge } from "@/components/ui/pixelact-ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/pixelact-ui/breadcrumb";
import { Calendar } from "@/components/ui/pixelact-ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/pixelact-ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/pixelact-ui/carousel";
import { Checkbox } from "@/components/ui/pixelact-ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/pixelact-ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/pixelact-ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/pixelact-ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/pixelact-ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/pixelact-ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/pixelact-ui/select";
import { Textarea } from "@/components/ui/pixelact-ui/textarea";
import React from "react";
import { DialogClose } from "@/components/ui/dialog";
import { useMediaquery } from "@/hooks/use-mediaquery";

const ComponentsShowcase = () => {
  const [calendarDate, setCalendarDate] = React.useState<Date | undefined>(
    new Date()
  );
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [selectedPlan, setSelectedPlan] = React.useState("pro");
  const isMobile = useMediaquery();

  return (
    <div className="border-t-2 border-dashed border-foreground/20 text-foreground pixel-font p-4 md:p-12 xl:p-24">
      {/* Breadcrumb Navigation */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* User Profile Card with Context Menu */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <ContextMenu>
                  <ContextMenuTrigger>
                    <div className="flex flex-col gap-2 items-center">
                      <Avatar variant="round">
                        <AvatarImage src="/api/placeholder/64/64" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      {isMobile && <Badge variant="secondary">Pro</Badge>}
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem>Change Avatar</ContextMenuItem>
                    <ContextMenuItem>View Profile</ContextMenuItem>
                    <ContextMenuItem>Settings</ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-4">
                    John Doe
                    {!isMobile && <Badge variant="secondary">Pro</Badge>}
                  </CardTitle>
                  <CardDescription>Full Stack Developer</CardDescription>
                </div>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary" className="w-full md:w-fit">
                    Quick Actions
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-2 flex-col space-y-2">
                    <Button className="w-full" size="sm">
                      Edit Profile
                    </Button>
                    <Button className="w-full" size="sm" variant="secondary">
                      Share Profile
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Alert Notification */}
            <Alert>
              <AlertTitle>Profile Verification</AlertTitle>
              <AlertDescription>
                Your email has been verified successfully! You now have access
                to all features.
              </AlertDescription>
            </Alert>

            {/* Settings Form */}
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Subscription Plan</Label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notifications"
                  checked={emailNotifications}
                  onCheckedChange={(checked) =>
                    setEmailNotifications(checked === true)
                  }
                />
                <Label htmlFor="notifications" className="mb-0 ml-2">
                  Enable email notifications
                </Label>
              </div>

              {/* Collapsible Advanced Settings */}
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="secondary" className="w-full">
                    Advanced Settings
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">EST</SelectItem>
                        <SelectItem value="pst">PST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Input id="language" placeholder="English" />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I change my password?
                </AccordionTrigger>
                <AccordionContent>
                  You can change your password in the security settings. Click
                  on the settings button and navigate to the security tab.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I upgrade my plan?</AccordionTrigger>
                <AccordionContent>
                  Use the subscription plan dropdown above to select a new plan.
                  Changes will take effect immediately.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I export my data?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can export your data from the advanced settings
                  section. Look for the "Export Data" button.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 items-start md:flex-row md:justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="w-full md:w-fit">
                  Preview Changes
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Profile Preview</DialogTitle>
                  <DialogDescription>
                    Here's how your profile will look to other users.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <div className="flex items-center gap-4">
                    <Avatar variant="round">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-foreground sp">John Doe</h4>
                      <p className="text-sm text-muted-foreground">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Looks Good!</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-full md:w-fit" variant="success">
                  Save Changes
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Save Changes?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to save these changes to your profile?
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel asChild>
                    <Button variant="secondary">Cancel</Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Button variant="success">Save Changes</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>

        {/* Sidebar with Calendar and Command Palette */}
        <div className="flex flex-col gap-4">
          {/* Command Palette */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Search</CardTitle>
              <CardDescription>Find anything quickly</CardDescription>
            </CardHeader>
            <CardContent>
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>🗓️ View Calendar</CommandItem>
                    <CommandItem>👤 Edit Profile</CommandItem>
                    <CommandItem>⚙️ Settings</CommandItem>
                  </CommandGroup>
                  <CommandGroup heading="Recent">
                    <CommandItem>📊 Dashboard</CommandItem>
                    <CommandItem>📁 Projects</CommandItem>
                    <CommandItem>📈 Analytics</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CardContent>
          </Card>

          {/* Calendar Widget */}
          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
              <CardDescription>Select a date to view events</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={calendarDate}
                onSelect={setCalendarDate}
              />
            </CardContent>
          </Card>

          {/* Featured Content Carousel */}
          <Card>
            <CardHeader>
              <CardTitle>Featured</CardTitle>
              <CardDescription>
                Latest updates and announcements
              </CardDescription>
            </CardHeader>
            <CardContent className="px-16">
              <Carousel className="w-full">
                <CarouselContent className="gap-2">
                  <CarouselItem>
                    <div className="p-6 text-center space-y-2">
                      <h4 className="font-semibold">New Features</h4>
                      <p className="text-sm text-muted-foreground">
                        Check out our latest component updates
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-6 text-center space-y-2">
                      <h4 className="font-semibold">Pro Tips</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn advanced usage patterns
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-6 text-center space-y-2">
                      <h4 className="font-semibold">Community</h4>
                      <p className="text-sm text-muted-foreground">
                        Join our growing developer community
                      </p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
