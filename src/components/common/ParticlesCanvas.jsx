import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const OPTIONS = {
  background: { color: { value: "transparent" } },
  fullScreen: { enable: true, zIndex: 0 },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: { events: { resize: true } },
  particles: {
    color: { value: ["#00d9ff", "#a855f7"] },
    links: { color: "#00d9ff", distance: 160, enable: true, opacity: 0.08, width: 1 },
    move: { enable: true, speed: 0.4, outModes: { default: "bounce" } },
    number: { density: { enable: true, area: 1200 }, value: 30 },
    opacity: { value: 0.25 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 2 } },
  },
};

const ParticlesCanvas = () => {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return <Particles id="tsparticles" init={init} options={OPTIONS} />;
};

export default ParticlesCanvas;
