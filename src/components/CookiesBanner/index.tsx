import { useIsMobile } from "@/hooks/use-mobile";
import { PixelButton } from "pixelact-ui";
import { useState } from "react";

interface CookiesBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookiesBanner = ({ onAccept, onDecline }: CookiesBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = useIsMobile();
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-foreground text-foreground border-t-2 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 z-50">
      <p className="pixel-font text-background text-xs md:text-sm">
        We use cookies to enhance your experience.
      </p>

      <div className="flex items-center gap-2">
        <PixelButton
          variant="success"
          size={isMobile ? "sm" : "default"}
          onClick={() => {
            onAccept();
            setIsVisible(false);
          }}
        >
          Accept
        </PixelButton>
        <PixelButton
          size={isMobile ? "sm" : "default"}
          onClick={() => {
            onDecline();
            setIsVisible(false);
          }}
        >
          Decline
        </PixelButton>
      </div>
    </div>
  );
};

export default CookiesBanner;
