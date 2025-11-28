import MainContainer from "../common/MainContainer";
import Image from "next/image";
import Author from "../../../public/images/weronika-pawlak-author.png";
import Button from "../common/Button";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Download } from "../animate-ui/icons/download";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 md:pt-30 bg-secondary-light dark:bg-secondary-dark"
    >
      <MainContainer>
        <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center mx-10 p-16 rounded-xl bg-primary-light dark:bg-primary-dark gap-30 xl:gap-20">
          <div className="absolute bottom-0 lg:left-0 xl:left-10 2xl:left-20 ">
            <Image
              width={450}
              height={750}
              src={Author}
              alt="Image of the author of the website"
              className="brightness-90 w-100 xl:w-120"
            />
          </div>
          <div className="lg:flex-1/3 lg:h-0 h-55"></div>
          <div className="flex-2/3 text-main-text-light dark:text-main-text-dark">
            <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-clash-display font-medium pb-10 md:leading-14 xl:leading-18">
              Hi, I&apos;m Weronika. <br />{" "}
              <span className="highlight">Front-end developer</span>, based in
              Wrocław, Poland.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <a
                href="https://github.com/vokx7"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-cta-light dark:hover:text-cta"
              >
                Github <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/weronika-pawlak-605596256/"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-cta-light dark:hover:text-cta"
              >
                LinkedIn <SiLinkedin />
              </a>
              <a
                href="mailto:pawlak-weronika@outlook.com"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-cta-light dark:hover:text-cta"
              >
                Email <IoMdMail />
              </a>
            </div>
            <AnimateIcon animateOnHover>
              <Button
                as="a"
                href="/Weronika-Pawlak-CV.pdf"
                className={"w-58 px-10 h-12"}
              >
                Download CV
                <Download />
              </Button>
            </AnimateIcon>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default About;
