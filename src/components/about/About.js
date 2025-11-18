import MainContainer from "../common/MainContainer";
import Image from "next/image";
import Author from "../../../public/images/author-wp-square.png";
import Button from "../common/Button";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Download } from "../animate-ui/icons/download";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="pb-20 bg-secondary-dark">
      <MainContainer>
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-center mx-10 p-16 rounded-xl bg-primary-dark">
          <div className="flex-2/3 text-main-text-dark">
            <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-clash-display font-medium pb-10 md:leading-14 xl:leading-18">
              Hi, I&apos;m Weronika. <br />{" "}
              <span className="highlight">Front-end developer</span>, based in
              Wrocław, Poland.
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <a
                href="https://github.com/vokx7"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-cta"
              >
                Github <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/weronika-pawlak-605596256/"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-cta"
              >
                LinkedIn <SiLinkedin />
              </a>
              <a
                href="mailto:pawlak-weronika@outlook.com"
                target="_blank"
                className="flex flex-row items-center gap-2 hover:text-cta"
              >
                Email <IoMdMail />
              </a>
            </div>
            <AnimateIcon animateOnHover>
              <Button
                as="a"
                href="/Weronika-Pawlak-CV.pdf"
                className={"w-58 bg-cta px-10 h-12"}
              >
                Download CV
                <Download />
              </Button>
            </AnimateIcon>
          </div>
          <Image
            width={400}
            height={400}
            src={Author}
            alt="Image of the author of the website"
            className="flex-1/3 brightness-85 pb-12 lg:pb-0"
          />
        </div>
      </MainContainer>
    </section>
  );
};

export default About;
