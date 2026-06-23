// const Socialmedia = ( {icon,text,url}) => {
//     return (
//       <a className="flex text-blue-600 mb-2 hover:text-blue-800" href={url}>
//         {icon} {text}
//       </a>
//     );
// }
// export default Socialmedia;

const Socialmedia = ({ icon, text, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex items-center gap-3
        mb-3
        text-blue-300
        transition-all duration-300
        hover:text-cyan-400
        hover:translate-x-2
      "
    >
      <span
        className="
          transition-transform duration-300
          group-hover:scale-125
          group-hover:rotate-12
        "
      >
        {icon}
      </span>

      <span className="font-medium">
        {text}
      </span>
    </a>
  );
};

export default Socialmedia;