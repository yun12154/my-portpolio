export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400" data-aos="fade-up">
        연락하기
      </h2>
      <p className="text-lg mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">
        함께 만들고 싶은 멋진 아이디어가 있나요? 언제든 연락주세요!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-full font-bold hover:brightness-90 transition shadow-md"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        이메일 보내기
      </a>
    </section>
  );
}