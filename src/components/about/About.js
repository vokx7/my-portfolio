"use client";
import AboutIntro from "./AboutIntro";
import AboutBeginning from "./AboutBeginning";
import TechStack from "./TechStack";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  // const { scrollY } = useScroll();
  // const x = useTransform(scrollY, [0, 1000], [0, -5100]); // mapowanie scroll Y → X
  return (
    <div className="py-34 text-primary px-12">
      <AboutIntro />
      <AboutBeginning />
      <TechStack />
    </div>

    // <div className="lg:relative">
    //   <div className="lg:sticky top-0 lg:h-screen lg:overflow-hidden py-34 text-primary px-12">
    //     <motion.div className="hidden lg:flex lg:h-full" style={{ x }}>
    //       <section className="lg:flex-shrink-0 lg:w-screen lg:h-full">
    //         <AboutIntro />
    //       </section>
    //       <section className="lg:flex-shrink-0 lg:w-screen lg:h-full">
    //         <AboutBeginning />
    //       </section>
    //       <section className="lg:flex-shrink-0 lg:w-screen lg:h-full">
    //         <TechStack />
    //       </section>
    //     </motion.div>
    //   </div>
    //   <div className="hidden lg:block lg:h-[100vh]" /> {/* długość scrolla */}
    // </div>
  );
};

export default About;
