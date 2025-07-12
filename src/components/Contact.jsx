export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-cyan-400" data-aos="fade-up">
        연락하기
      </h2>
      <p
        className="text-lg mb-8 text-gray-300"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        함께 만들고 싶은 멋진 아이디어가 있나요? 언제든 연락주세요!
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl mx-auto flex flex-col gap-4 text-left"
      >
        <input
          type="text"
          placeholder="이름"
          className="w-full px-4 py-3 rounded-md border border-gray-500 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-3 rounded-md border border-gray-500 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          rows="5"
          placeholder="메시지"
          className="w-full px-4 py-3 rounded-md border border-gray-500 bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition-colors"
        >
          보내기
        </button>
      </form>
    </section>
  );
}