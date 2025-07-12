import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden bg-black">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00FFFF" },
            links: { color: "#00FFFF", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 2 },
            number: { value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-neon" data-aos="fade-up">
        I MAKE IDEAS REAL.
      </h2>

      <TypeAnimation
        sequence={[
          'Front-End Developer',
          2000,
          'Creative Coder',
          2000,
          'Problem Solver',
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-lg sm:text-xl md:text-3xl text-cyan-400"
        repeat={Infinity}
      />

      <a
        href="#projects"
        className="mt-4 sm:mt-6 md:mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md transition-colors"
      >
        프로젝트 보러가기
      </a>
    </section>
  );
}