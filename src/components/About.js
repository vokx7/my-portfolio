import Image from "next/image";
import MainContainer from "./MainContainer";
import DragonFruits from "../../public/images/fruit.webp";
import Author from "../../public/images/me.webp";
import AboutTimetable from "./AboutTimetable";

const About = () => {
  const experienceRecords = [
    {
      place: "Freelance",
      desc: "Developing responsive web applications using React (commercial projects and private portfolio development).",
      year: "2022 - now",
    },
    {
      place: "Frontend Developer",
      desc: "Creating web applications using Next.js, Tailwind CSS technologies. Support in creating cross-platform applications (Flutter, Node.js, MongoDB).",
      year: "03.2023 - 06.2024",
    },
  ];

  const educationRecords = [
    {
      place: "Wroclaw University of Economics and Business",
      desc: "Master's Degree in Business Informatics",
      year: "2022 - 2024",
    },
    {
      place: "Wroclaw University of Economics and Business",
      desc: "Bachelor's Degree in Business Informatics",
      year: "2019 - 2022",
    },
  ];
  return (
    <div className="py-34  text-primary">
      <MainContainer className="px-12 pb-8">
        <div className="">
          <Image
            src={DragonFruits}
            alt="dragon fruits picture"
            width={800}
            height={600}
          />
        </div>
        <div className="py-14 ">
          <h1 className="text-8xl font-clash-display font-light">
            Hi, it&apos;s <span className="font-medium">Weronika Pawlak</span>{" "}
            here. I&apos;m a{" "}
            <span className="font-medium italic">front-end developer</span> with
            a passion for{" "}
            <span className="font-medium italic">
              design-driven development
            </span>
            , based in <span className="font-medium">Wroclaw, Poland</span>.{" "}
          </h1>
        </div>
        <div className="flex flex-row pb-8">
          <div className="flex flex-col flex-1">
            <div>
              <h2 className="text-7xl font-clash-display font-light pb-8">
                how did it all start?
              </h2>
            </div>
            <div className="text-xl ">
              <div>
                <p className="max-w-[60%]">
                  As a child, I loved drawing and, of course, playing computer
                  games. I always said I&apos;d become a graphic designer,
                  architect, or programmer. It quickly became clear that drawing
                  alone wasn&apos;t enough. Therefore, front-end seems to be
                  perfect for me, as I can express myself creatively and combine
                  it with analytical thinking when writing code.
                </p>
              </div>
              <div>
                <h3 className="pt-4 text-2xl font-clash-display uppercase tracking-wide font-medium ">
                  fun fact
                </h3>
                <p className=" max-w-[60%]">
                  I&apos;ve always had top grades in humanities (90% on the
                  extended Polish exam in my high school final exam). Don&apos;t
                  ask about math and physics, but I&apos;m interested in WebGL.
                  UI/UX isn&apos;t enough for me. It&apos;s cute but I need to
                  code.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={DragonFruits}
              alt="dragon fruits picture"
              width={900}
              height={800}
            />
          </div>
        </div>
        <AboutTimetable title="Experience" records={experienceRecords} />
        <AboutTimetable title="Education" records={educationRecords} />
      </MainContainer>
    </div>
  );
};

export default About;
