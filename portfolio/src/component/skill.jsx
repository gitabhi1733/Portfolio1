import Section from "./section";
import { Code } from "lucide-react";
import Pill from "./pill";
const Skill = () => {
    const NAME = ["JavaScript", "React", "Node.js", "Python", "SQL", "Git", "AWS","Mongodb"];
    return <Section icon={<Code></Code>} sectionTitle="Skills">
        {NAME.map(title => <Pill title={title} key={title}></Pill>)}
        
    </Section>
}
export default Skill;