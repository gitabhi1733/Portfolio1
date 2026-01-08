import Pill from "./pill";
const PROJECTIN = ({ title, desc, techUsed }) => {
    return (
      <div className="bg-blue-50 max-w-4xl mx-auto rounded-xl shadow-lg p-6 mb-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-5m text-gray-700 mb-4"> {desc}</p>

        {techUsed.map((PLIST) => (
          <Pill title={PLIST}></Pill>
        ))}
      </div>
    );
}
export default PROJECTIN;