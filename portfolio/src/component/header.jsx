

import passportPhoto from "../assets/abhishekkes.jpg";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-black text-white p-8 rounded-t-2xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
      {/* Left Section */}
      <div>
        <h1
          className="
    text-4xl md:text-5xl
    font-bold
    bg-gradient-to-r
    from-cyan-400
    via-blue-500
    to-indigo-500
    bg-clip-text
    text-transparent
  "
        >
          Abhishek Kesharwani
        </h1>

        <p className="text-slate-300 text-lg mt-3 font-medium">
          Full Stack Developer
        </p>

        <div className="w-24 h-1 bg-blue-400 mt-3 rounded-full"></div>

        <p className="mt-4 text-gray-200 max-w-md">
          Passionate MERN Stack Developer focused on building modern,
          responsive, and scalable web applications.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative">
        <img
          src={passportPhoto}
          alt="Abhishek Kesharwani"
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 rounded-full border-2 border-blue-300 animate-pulse"></div>
      </div>
    </header>
  );
};

export default Header;