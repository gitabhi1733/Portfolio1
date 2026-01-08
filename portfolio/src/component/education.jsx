import Section from "./section";
import { BookOpen } from "lucide-react";
import Graduation from "./graduation";

const Education = () => {
    return <Section icon={<BookOpen></BookOpen>} sectionTitle="Education">
        <Graduation title='Bachelor of Science in Computer Science' school='University of Technology' year='2023-2026'></Graduation>
        <Graduation title='Full Stack web Development Bootcamp' school='Code Academy ' year='2026'></Graduation>
    </Section>
}
export default Education;