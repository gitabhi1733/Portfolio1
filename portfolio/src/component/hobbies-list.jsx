const Hobbieslist = ({LIST}) => {
    return <ul className="list-disc pl-8">
        {LIST.map(item => <li key={item}>{ item}</li>)}
    </ul>
        
    
}
export default Hobbieslist;