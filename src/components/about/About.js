import AboutIntro from "./AboutIntro";
import AboutBeginning from "./AboutBeginning";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div className="py-34 text-primary px-12">
      <AboutIntro />
      <AboutBeginning />
      <TechStack />
    </div>
  );
};

export default About;
