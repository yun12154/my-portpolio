import profileImg from "../assets/profile.jpg"; // 너가 넣은 이미지 파일명

export default function About() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* ✅ 왼쪽: 프로필 이미지 */}
        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto md:mx-0"
        />

        {/* ✅ 오른쪽: 텍스트 + 뱃지 */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h2>
          <p className="mb-4 text-gray-300">
            저는 창의적이고 열정적인 프론트엔드 개발자입니다.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <span className="px-4 py-2 bg-cyan-500 rounded-full text-sm">
              Frontend
            </span>
            <span className="px-4 py-2 bg-cyan-500 rounded-full text-sm">
              UI/UX
            </span>
            <span className="px-4 py-2 bg-cyan-500 rounded-full text-sm">
              React
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}