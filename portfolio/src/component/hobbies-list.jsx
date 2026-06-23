const Hobbieslist = ({LIST}) => {
    return (
      <ul className="list-disc pl-8">
        {LIST.map((item) => (
          <li className=" text-white" key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
        
    
}
export default Hobbieslist;