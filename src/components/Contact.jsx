export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">연락하기</h2>
      <p className="text-center text-lg mb-8 text-gray-700">
        함께하고 싶은 프로젝트가 있나요? 언제든 편하게 연락해주세요!
      </p>
      <div className="text-center">
        <a
          href="mailto:youremail@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
        >
          이메일 보내기
        </a>
      </div>
    </section>
  );
}