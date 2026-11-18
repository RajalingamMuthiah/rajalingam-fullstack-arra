/**
 * Smooth-scroll to an element by id. The fixed navbar offset is handled by the
 * `scroll-mt-20` class on each target section.
 * Returns false when the element is not in the DOM yet.
 */
export const scrollToSection = (id, behavior = "smooth") => {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
};
