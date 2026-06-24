import Section from "./section";
import { Briefcase } from "lucide-react";
import PROJECTIN from "./Projectin";

const Project = () => {
    const projectlist = [
      {
        title: "Airbnb",
        desc: "Developed a full-stack Airbnb-inspired web application using the MERN stack (MongoDB, Express.js, React, and Node.js). The platform enables users to explore property listings, view detailed information about accommodations, and manage their favorite properties. Implemented secure user authentication and authorization to ensure protected access to user-specific features. Built RESTful APIs for efficient communication between the frontend and backend and integrated MongoDB for reliable data storage and management",
        techUsed: ["EJS", "MONGODB", "EXPRESS.JS", "NODE.JS"],
        github: "https://github.com/gitabhi1733/Portfolio1/tree/main/portfolio",
      },
    ];
    return <Section icon={<Briefcase></Briefcase>} sectionTitle="Projects">
        {projectlist.map(list => <PROJECTIN title={list.title} desc={list.desc} key={list.title} techUsed={list.techUsed} github={list.github}>    </PROJECTIN>)}
        
        
    </Section>
}
export default Project;