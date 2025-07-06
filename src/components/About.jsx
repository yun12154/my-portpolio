export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <div
        className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-700">
          소개
        </h2>
        <p className="text-center text-lg text-gray-800">
          안녕하세요! 다양한 프로젝트로 성장 중인 프론트엔드 개발자입니다.
          직관적이고 재밌는 인터랙션 만드는 걸 좋아해요.
        </p>
      </div>
    </section>
  );
}