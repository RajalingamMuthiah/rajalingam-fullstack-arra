import { useEffect } from "react";

const META = {
  description: 'meta[name="description"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  twitterTitle: 'meta[name="twitter:title"]',
  twitterDescription: 'meta[name="twitter:description"]',
};

const read = (sel) => document.querySelector(sel)?.getAttribute("content") ?? null;
const write = (sel, value) => {
  const el = document.querySelector(sel);
  if (el && value != null) el.setAttribute("content", value);
};

// Site-wide defaults from index.html, restored when a page unmounts.
const DEFAULTS =
  typeof document === "undefined"
    ? null
    : {
        title: document.title,
        description: read(META.description),
        ogTitle: read(META.ogTitle),
        ogDescription: read(META.ogDescription),
        twitterTitle: read(META.twitterTitle),
        twitterDescription: read(META.twitterDescription),
      };

const apply = ({ title, description }) => {
  if (title) document.title = title;
  write(META.description, description);
  write(META.ogTitle, title);
  write(META.ogDescription, description);
  write(META.twitterTitle, title);
  write(META.twitterDescription, description);
};

/**
 * Per-page <title> and description (plus Open Graph / Twitter copies).
 * Omitted values keep the site defaults from index.html.
 */
const useDocumentTitle = ({ title, description } = {}) => {
  useEffect(() => {
    if (!DEFAULTS) return undefined;
    apply({
      title: title ?? DEFAULTS.title,
      description: description ?? DEFAULTS.description,
    });
    return () => {
      document.title = DEFAULTS.title;
      write(META.description, DEFAULTS.description);
      write(META.ogTitle, DEFAULTS.ogTitle);
      write(META.ogDescription, DEFAULTS.ogDescription);
      write(META.twitterTitle, DEFAULTS.twitterTitle);
      write(META.twitterDescription, DEFAULTS.twitterDescription);
    };
  }, [title, description]);
};

export default useDocumentTitle;
