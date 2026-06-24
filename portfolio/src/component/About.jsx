// import { User } from "lucide-react";
// import Section from "./section";
// const About = () => {
//   return (
//     <Section icon={<User></User>} sectionTitle="About Me">
//       <p>
//         I am a BCA student passionate about web development and modern
//         technologies. I am currently learning frontend and backend development
//         and working on small projects to improve my skills. My goal is to start
//         my career in the IT industry as a developer.
//       </p>
//     </Section>
//   );
// };
// export default About;

import { User } from "lucide-react";
import Section from "./section";

const About = () => {
  return (
    <Section icon={<User />} sectionTitle="About Me">
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
        <p className="text-base md:text-lg leading-8">
          I am a BCA student and aspiring Full Stack Developer with hands-on
          experience in the MERN stack (MongoDB, Express.js, React, and
          Node.js). I have built real-world web applications that helped me
          strengthen my frontend and backend development skills. I enjoy
          creating responsive, user-friendly, and scalable applications while
          continuously learning modern web technologies and best practices. My
          goal is to contribute to innovative projects, solve real-world
          problems through technology, and grow as a professional software
          developer.
        </p>
      </div>
    </Section>
  );
};

export default About;
