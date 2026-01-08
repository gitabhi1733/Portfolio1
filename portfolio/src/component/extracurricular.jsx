import Section from "./section";
import { Award } from 'lucide-react';
import Hobbieslist from "./hobbies-list";

const Extracurricular = () => {
    const item = ['volunteer at local bootcamp for underprivileged youth', 'Organizer of city-wide hackathon event', 'Member of the University Chess Club'];
    return <Section icon={<Award></Award>} sectionTitle="Extracurricular Activities">
        <Hobbieslist LIST={item}></Hobbieslist>
    </Section>
}
export default Extracurricular;