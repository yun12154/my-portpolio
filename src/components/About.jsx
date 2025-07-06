export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-black text-white"
    >
      <div
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-cyan-400 shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">
          소개
        </h2>
        <p className="text-center text-lg text-gray-200">
          화려하고 다이나믹한 프론트엔드 개발자 준석입니다.
          다양한 기술과 트렌디한 효과로 시선을 끄는 UI/UX를 만듭니다.
        </p>
      </div>
    </section>
  );
}