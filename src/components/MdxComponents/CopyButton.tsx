import { useState } from "react";
import clsx from "clsx";

const buttonClasses =
  "flex items-center text-xs font-medium text-white rounded cursor-pointer p-2 bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-700 transition-colors duration-200";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={clsx(buttonClasses, className)}
    >
      {isCopied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path
            className="fill-foreground"
            d="M18 6h2v2h-2zm-2 4V8h2v2zm-2 2v-2h2v2zm-2 2h2v-2h-2zm-2 2h2v-2h-2zm-2 0v2h2v-2zm-2-2h2v2H6zm0 0H4v-2h2z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="h-4 w-4"
        >
          <path
            className="fill-foreground"
            d="M10 2h6v2h4v18H4V4h4V2zm6 4v2H8V6H6v14h12V6zm-2 0V4h-4v2z"
          />
        </svg>
      )}
    </button>
  );
}
