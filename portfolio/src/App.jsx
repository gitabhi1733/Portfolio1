import Header from "./component/header";
import About from "./component/About";
import Project from "./component/project";
import Skill from "./component/skill";
import Education from "./component/education";
import Hobbies from "./component/hobbies";
import Extracurricular from "./component/extracurricular";
import Contact from "./contact";


function App() {
  

  return (
    <>
      {/* <div className="bg-slate-100 px-3  py-8">
        <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
          <Header></Header>
          <About></About>
          <Project></Project>
          <Skill></Skill>
          <Education></Education>
          <Hobbies></Hobbies>
          <Extracurricular></Extracurricular>
          <Contact></Contact>
        </div>
      </div> */}

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-950 py-10 px-4">
        
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
            {/* <div className="bg-white rounded-3xl shadow-2xl overflow-hidden"> */}
              <Header />
              <About />
              <Project />
              <Skill />
              <Education />
              <Hobbies />
              <Extracurricular />
              <Contact />
            </div>
          </div>
        
      
    </>
  );
}

export default App;
