import Image from "next/image";
import MainContainer from "../common/MainContainer";
import DragonFruits from "../../../public/images/fruit.webp";

const AboutIntro = () => {
  return (
    <MainContainer className="pb-8">
      <div className="">
        <Image
          src={DragonFruits}
          alt="dragon fruits picture"
          width={800}
          height={600}
        />
      </div>
      <div className="py-14 ">
        <h1 className="text-5xl md:text-8xl font-clash-display font-light">
          Hi, it&apos;s <span className="font-medium">Weronika Pawlak</span>{" "}
          here. I&apos;m a{" "}
          <span className="font-medium italic">front-end developer</span> with a
          passion for{" "}
          <span className="font-medium italic">design-driven development</span>,
          based in <span className="font-medium">Wroclaw, Poland</span>.{" "}
        </h1>
      </div>
    </MainContainer>
  );
};

export default AboutIntro;
