const Socialmedia = ( {icon,text,url}) => {
    return (
      <a className="flex text-blue-600 mb-2 hover:text-blue-800" href={url}>
        {icon} {text}
      </a>
    );
}
export default Socialmedia;