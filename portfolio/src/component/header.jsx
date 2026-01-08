import passportPhoto from'../assets/abhishekkes.jpg';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-5 rounded-t-lg flex justify-between items-center">
      <div>
        <div className="font-bold text-3xl">Abhishek kesharwani</div>
        <div className="text-x ">Full stack developer</div>
      </div>
      <img src={passportPhoto} className="rounded-full w-28 " alt=""></img>
    </header>
  );
};
export default Header;
