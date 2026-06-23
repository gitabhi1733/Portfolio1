import Section from "./section";
import { Briefcase } from "lucide-react";
import PROJECTIN from "./Projectin";

const Project = () => {
    const projectlist = [

        {
            title: "E-commerce Platform",
            desc: "Developed a fully-functional e-commerce platform with  user authentication,product management.",
            techUsed: ["React", "Node.js", "MongoDB", "Stripe" ,"Tailwind"],
        },
        
    ];
    return <Section icon={<Briefcase></Briefcase>} sectionTitle="Projects">
        {projectlist.map(list=><PROJECTIN title={list.title}  desc={list.desc} key={list.title}  techUsed={list.techUsed}>    </PROJECTIN>)}
        
    </Section>
}
export default Project;