import Section from "./section";
import { BookOpen } from "lucide-react";
import Graduation from "./graduation";

const Education = () => {
    return (
      <Section icon={<BookOpen></BookOpen>} sectionTitle="Education">
        <Graduation
          title="Bachelor of Computer Applications(BCA)"
          school="Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj"
          year="Year: 2023 – 2026 (Pursuing)"
        ></Graduation>
        <Graduation
          title="Full Stack web Development Bootcamp"
          school="Knowledge Gate "
          year="2025"
        ></Graduation>
      </Section>
    );
}
export default Education;