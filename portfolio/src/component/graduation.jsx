const Graduation = ({title, school, year}) => {
    return (
      <>
        <h1 className="font-bold text-lg text-white">{title}</h1>

        <p className="text-sm text-white mb-4">
          {school}
          <br />
          {year}
          <br />
        </p>
        
      </>
    );
}
export default Graduation;