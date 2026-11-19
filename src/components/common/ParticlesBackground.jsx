import { lazy, Suspense, useEffect, useState } from "react";

// Loaded only when shown, so phones and reduced-motion users never download
// the particles bundle.
const Particles = lazy(() => import("./ParticlesCanvas"));

const QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

/** Subtle particle background: desktop only, off when reduced motion is set. */
const ParticlesBackground = () => {
  const [enabled, setEnabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!enabled) return null;
  return (
    <Suspense fallback={null}>
      <Particles />
    </Suspense>
  );
};

export default ParticlesBackground;
