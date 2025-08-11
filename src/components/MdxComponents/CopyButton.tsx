import { useState } from "react";
import clsx from "clsx";
import { Check, Clipboard } from "lucide-react";

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
        <Check className="h-4 w-4" />
      ) : (
        <Clipboard className="h-4 w-4" />
      )}
    </button>
  );
}
