import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white pt-20 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#4f46e5" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      <img
        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&h=300&w=300"
        alt="프로필 이미지"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
        data-aos="zoom-in"
      />
      <h2 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
        안녕하세요! 준석입니다.
      </h2>
      <p className="text-lg md:text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">
        화려한 UI/UX를 사랑하는 개발자
      </p>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        포트폴리오 보러가기
      </a>
    </section>
  );
}