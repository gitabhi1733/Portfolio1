import Section from "./component/section";
import { Globe } from 'lucide-react';
import { Linkedin } from "lucide-react";
import Socialmedia from "./socialmedia";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

const Contact = () => {

    const socialLinks = [
      {
        icon: <Linkedin></Linkedin>,
        text: "Linkedin",
        url: "https://www.linkedin.com/in/abhishek-kesharwani-5b51a02ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        icon: <Github></Github>,
        text: "Github",
        url: "https://github.com/gitabhi1733",
      },
      {
        icon: <Twitter></Twitter>,
        text: "Twitter",
        url: "https://x.com/AbhishekKe58352",
      },
    ];


    return (
      <Section icon={<Globe></Globe>} sectionTitle="Contact & Social Media">
        <p className="text-gray-700 mb-4">
          Email:abhishekkesharwani173@gmail.com<br></br>
          Phone: 9305986527
        </p>
        {socialLinks.map((socil) => (
          <Socialmedia
            icon={socil.icon}
            text={socil.text}
            url={socil.url}
            key={socil.text}
            
          ></Socialmedia>
        ))}
      </Section>
    );
}
export default Contact;