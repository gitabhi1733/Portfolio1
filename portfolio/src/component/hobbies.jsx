import Section from "./section";
import { Heart } from "lucide-react";
import Hobbieslist from "./hobbies-list";

const Hobbies = () => {
    const now = ["Playing guitar","Reading Books","Playing Cricket"];
    return <Section icon={<Heart></Heart>} sectionTitle='Hobbies & Interests'>
        <Hobbieslist LIST={now}></Hobbieslist>
    </Section>
}
export default Hobbies;