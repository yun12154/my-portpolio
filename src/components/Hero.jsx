export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-20">
      <img
        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&h=300&w=300"
        alt="프로필 이미지"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow"
      />
      <h2 className="text-4xl md:text-6xl font-bold mb-4">안녕하세요! 준석입니다.</h2>
      <p className="text-lg md:text-2xl mb-8">깔끔한 UI/UX를 사랑하는 프론트엔드 개발자</p>
      <a
        href="#projects"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
      >
        포트폴리오 보러가기
      </a>
    </section>
  );
}