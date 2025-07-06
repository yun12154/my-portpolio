export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-blue-600 to-purple-600 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
        연락하기
      </h2>
      <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
        함께하고 싶은 프로젝트가 있나요? 언제든 편하게 연락해주세요!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        이메일 보내기
      </a>
    </section>
  );
}