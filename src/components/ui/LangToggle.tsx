export default function LangToggle() {
  return (
    <button
      id="lang-toggle"
      className="fixed border-1 border-purple-900 rounded-lg top-4 right-6 p-4 md:p-2 md:top-0 md:right-2 lg:right-4 md:border-0 font-bold text-xl text-indigo-400 hover:text-indigo-200 transition-colors duration-300"
    >
      <span className="lang-label">ES</span>
    </button>
  );
}
