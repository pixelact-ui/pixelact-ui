import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import {
  Breadcrumb as ShadcnBreadcrumb,
  BreadcrumbList as ShadcnBreadcrumbList,
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
  BreadcrumbEllipsis as ShadcnBreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";

import { Slot } from "@radix-ui/react-slot";
import { MoreHorizontal } from "lucide-react";

const breadcrumbVariants = cva("", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
    variant: {
      default: "text-card-foreground",
      destructive:
        "text-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BreadcrumbNavigationProps
  extends React.ComponentProps<"nav">,
    VariantProps<typeof breadcrumbVariants> {}

interface BreadcrumbOrderedListProps
  extends React.ComponentProps<"ol">,
    VariantProps<typeof breadcrumbVariants> {}

interface BreadcrumbPageProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof breadcrumbVariants> {}

interface BreadcrumbListItemProps
  extends React.ComponentProps<"li">,
    VariantProps<typeof breadcrumbVariants> {}

interface BreadcrumbLinkProps
  extends React.ComponentProps<"a">,
    VariantProps<typeof breadcrumbVariants> {}

function Breadcrumb({
  variant,
  font,
  className,
  ...props
}: BreadcrumbNavigationProps) {
  return (
    <ShadcnBreadcrumb
      className={cn(breadcrumbVariants({ variant, font }), className)}
      {...props}
    />
  );
}

function BreadcrumbList({
  variant,

  className,
  ...props
}: BreadcrumbOrderedListProps) {
  return (
    <ShadcnBreadcrumbList
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    />
  );
}

function BreadcrumbItem({
  variant,

  className,
  ...props
}: BreadcrumbListItemProps) {
  return (
    <ShadcnBreadcrumbItem
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  variant,

  className,
  asChild,
  ...props
}: BreadcrumbLinkProps & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    />
  );
}

function BreadcrumbPage({
  variant,

  className,
  ...props
}: BreadcrumbPageProps) {
  return (
    <ShadcnBreadcrumbPage
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  variant,

  className,
  ...props
}: BreadcrumbListItemProps) {
  return (
    <ShadcnBreadcrumbSeparator
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    />
  );
}

function BreadcrumbEllipsis({
  variant,

  className,
  ...props
}: BreadcrumbListItemProps) {
  return (
    <ShadcnBreadcrumbEllipsis
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    >
      <MoreHorizontal className={"size-7 pixel-font"} />
      <span className="sr-only">More</span>
    </ShadcnBreadcrumbEllipsis>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
