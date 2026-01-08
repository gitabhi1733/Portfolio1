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
      <div className="bg-slate-100 px-3  py-8">
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
        
      </div>
    </>
  );
}

export default App;
