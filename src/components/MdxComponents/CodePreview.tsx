import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Pre } from "./Pre";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

interface CodePreviewProps {
  children: React.ReactNode;
  code: string;
  language?: string;
  className?: string;
}

export function CodePreview({
  children,
  code,
  language = "tsx",
  className,
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (activeTab === "code" && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [activeTab, code]);

  return (
    <div className={cn("mb-6", className)}>
      {/* Tab Navigation */}
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab("preview")}
          className={cn(
            "px-4 py-2 text-sm pixel-font transition-colors cursor-pointer",
            "hover:bg-foreground/10",
            activeTab === "preview"
              ? "bg-foreground text-background"
              : "bg-background text-foreground"
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={cn(
            "px-4 py-2 text-sm pixel-font transition-colors cursor-pointer",
            "hover:bg-foreground/10",
            activeTab === "code"
              ? "bg-foreground text-background"
              : "bg-background text-foreground"
          )}
        >
          Code
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[200px]">
        {activeTab === "preview" ? (
          <div className="p-6 bg-background border border-foreground">
            <div className="flex items-center justify-center min-h-[150px]">
              {children}
            </div>
          </div>
        ) : (
          <div className="relative">
            <Pre className="m-0 border-none rounded-none">
              <code
                ref={codeRef}
                className={`language-${language} block p-6 text-sm overflow-x-auto`}
              >
                {code}
              </code>
            </Pre>
          </div>
        )}
      </div>
    </div>
  );
}
