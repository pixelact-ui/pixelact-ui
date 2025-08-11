import clsx from "clsx";
import { CopyButton } from "./CopyButton";
import { ReactNode, HTMLAttributes } from "react";

// Recursively extract all text from children
function extractCodeString(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractCodeString).join("");
  if (children && typeof children === "object" && "props" in children)
    // @ts-expect-error: children may be any React element
    return extractCodeString(children.props.children);
  return "";
}

interface PreProps extends HTMLAttributes<HTMLPreElement> {
  children: ReactNode;
  buttonClasses?: string;
}

export function Pre({
  children,
  buttonClasses = "absolute top-3 right-3 bg-zinc-900",
  ...props
}: PreProps) {
  const codeString = extractCodeString(children).trim();

  return (
    <pre {...props} className={clsx("relative w-full my-4", props.className)}>
      {children}
      <CopyButton text={codeString} className={buttonClasses} />
    </pre>
  );
}
