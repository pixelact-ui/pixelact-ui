import { Pre } from "./Pre";
import { CodePreview } from "./CodePreview";
import { ComponentProps } from "react";

const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      {...props}
      className="text-2xl md:text-3xl text-foreground mb-4 mt-4 pixel-font"
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2
      {...props}
      className="text-xl md:text-2xl text-foreground mb-3 mt-3 pixel-font"
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3
      {...props}
      className="text-lg md:text-xl text-foreground mb-2 mt-4 pixel-font"
    />
  ),
  h4: (props: ComponentProps<"h4">) => (
    <h4
      {...props}
      className="text-sm md:text-lg text-foreground mb-2 mt-3 pixel-font"
    />
  ),
  h5: (props: ComponentProps<"h5">) => (
    <h5
      {...props}
      className="text-sm md:text-base text-foreground mb-2 mt-3 pixel-font"
    />
  ),
  h6: (props: ComponentProps<"h6">) => (
    <h6
      {...props}
      className="text-xs md:text-sm text-foreground mb-2 mt-3 pixel-font"
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p {...props} className="text-foreground mb-4 leading-relaxed" />
  ),
  pre: (props: ComponentProps<typeof Pre>) => <Pre {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l-4 border-muted-foreground pl-4 italic text-muted-foreground mb-4"
    />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul
      {...props}
      className="list-disc list-inside mb-4 space-y-1 text-foreground"
    />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol
      {...props}
      className="list-decimal list-inside mb-4 space-y-1 text-foreground"
    />
  ),
  li: (props: ComponentProps<"li">) => (
    <li {...props} className="text-foreground" />
  ),
  a: (props: ComponentProps<"a">) => (
    <a {...props} className="text-link underline font-bold" />
  ),
  table: (props: ComponentProps<"table">) => (
    <table
      {...props}
      className="text-foreground w-full border-collapse border border-foreground"
    />
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead {...props} className="bg-muted" />
  ),
  tbody: (props: ComponentProps<"tbody">) => <tbody {...props} />,
  tr: (props: ComponentProps<"tr">) => (
    <tr {...props} className="border-b border-foreground" />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      {...props}
      className="border border-foreground px-4 py-2 text-left font-bold"
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td {...props} className="border border-foreground px-4 py-2" />
  ),
  CodePreview,
};

export default mdxComponents;
