import { useLayoutEffect, useState } from "react";
import { X } from "lucide-react";
import SmartLink from "../common/SmartLink";
import { brand, destinations } from "../../data/portfolio";

// Bump the version to show the bar again to people who dismissed an older one.
export const ANNOUNCEMENT_KEY = "announcement-dismissed:pathwise-v1";

const readDismissed = () => {
  try {
    return window.localStorage.getItem(ANNOUNCEMENT_KEY) === "1";
  } catch {
    return false;
  }
};

/**
 * Site-wide Pathwise announcement above the navbar. Dismissal is remembered in
 * localStorage (when available). While visible, <html> gets `has-announcement`,
 * which raises --header-h (index.css) so page padding and scroll offsets clear
 * the taller header. index.html sets the class before React loads to avoid a
 * layout shift.
 */
const AnnouncementBar = () => {
  const [visible, setVisible] = useState(() => !readDismissed());

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("has-announcement", visible);
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(ANNOUNCEMENT_KEY, "1");
    } catch {
      // Storage blocked (private mode etc.): hide for this visit only.
    }
  };

  return (
    <div
      id="announcement-bar"
      className="relative h-10 flex items-center justify-center px-12 bg-teal-700 text-white text-sm font-medium"
    >
      <SmartLink
        {...destinations.mentoring}
        className="inline-flex items-center gap-2 rounded hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span aria-hidden="true">🎓</span>
        <span className="hidden sm:inline">{brand.announcement.long}</span>
        <span className="sm:hidden">{brand.announcement.short}</span>
        <span aria-hidden="true">→</span>
      </SmartLink>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 p-1.5 rounded-md hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
