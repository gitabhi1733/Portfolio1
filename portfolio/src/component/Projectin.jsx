import Pill from "./pill";
const PROJECTIN = ({ title, desc, techUsed,github }) => {
    return (
      <div
        className="
          bg-gradient-to-br from-slate-900 to-slate-800
          text-slate-200
          p-6 md:p-8
          rounded-2xl
          shadow-lg
          border border-slate-700
          transition-all duration-300
          hover:shadow-2xl
          hover:-translate-y-2
          hover:border-cyan-400
        "
      >
        <h1
          className="
    font-bold text-xl text-white
    transition-all duration-300
    hover:scale-110 hover:text-cyan-400
  "
        >
          {title}
        </h1>
        <p className="text-5m text-white mb-4"> {desc}</p>
        

        {techUsed.map((PLIST) => (
          <Pill title={PLIST}></Pill>
        ))}

        <a href={"https://github.com/gitabhi1733/NEWAIRBNB/tree/main/airbnb1"}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition"
>
  View Source Code
</a>
      </div>

      
 
    );
}
export default PROJECTIN;