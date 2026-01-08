import { User } from "lucide-react";
import Section from "./section";
const About = () => {
  return (
    <Section icon={<User></User>} sectionTitle="About Me">
      <p>
        I,m a passionate full stack developer with 5 years of experience in
        building web applications. I love creating efficient, scalable, and
        user-friendly solutions to complex problems.
      </p>
    </Section>
  );
};
export default About;
