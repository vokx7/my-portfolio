import Image from "next/image";
import AboutTimetable from "./AboutTimetable";
import MainContainer from "../common/MainContainer";
import DragonFruits from "../../../public/images/fruit.webp";

const AboutBeginning = () => {
  const experienceRecords = [
    {
      place: "Freelance",
      desc: "Developing responsive web applications using React (commercial projects and private portfolio development).",
      year: "2022 - now",
    },
    {
      place: "Frontend Developer - SYMA GROUP",
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
    <MainContainer>
      <div className="flex flex-col-reverse md:flex-row items-center pb-8">
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-7xl md:text-8xl font-clash-display font-light py-8 md:pt-0">
              how did <br /> it all start?
            </h2>
          </div>

          <div className="text-xl md:py-4 ">
            <div>
              <p className="md:max-w-[80%]">
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
              <p className=" md:max-w-[80%]">
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
      <div className="py-8">
        <AboutTimetable title="Experience" records={experienceRecords} />
        <AboutTimetable title="Education" records={educationRecords} />
      </div>
    </MainContainer>
  );
};

export default AboutBeginning;
