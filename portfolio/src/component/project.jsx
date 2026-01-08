import Section from "./section";
import { Briefcase } from "lucide-react";
import PROJECTIN from "./Projectin";

const Project = () => {
    const projectlist = [

        {
            title: "E-commerce Platform",
            desc: "Developed a fully-functional e-commerce platform with  user authentication,product management, and payment integration.",
            techUsed: ["React", "Node.js", "MongoDB", "Stripe"],
        },
        {
            title: "Social Media Dashboard",
            desc: "Created a responsive dashboard for social media analytics, featuring real-time data visualization and reporting",
            techUsed: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
        },
    ];
    return <Section icon={<Briefcase></Briefcase>} sectionTitle="Projects">
        {projectlist.map(list=><PROJECTIN title={list.title}  desc={list.desc} key={list.title}  techUsed={list.techUsed}>    </PROJECTIN>)}
        
    </Section>
}
export default Project;