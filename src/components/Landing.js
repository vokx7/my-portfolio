import Image from "next/image";
import Button from "./common/Button";
import MainContainer from "./common/MainContainer";
const Landing = () => {
  return (
    <MainContainer>
      <div
        id="main"
        className="flex flex-col-reverse lg:flex-row  justify-center gap-6 py-15 pt-35 lg:p-[3rem] lg:py-[12rem] "
      >
        <div className="flex-1 px-8 lg:px-0 md:flex md:flex-col md:justify-between md:pb-10">
          <div>
            <h1 className="font-clash-display font-bold text-6xl lg:text-9xl my-6 text-pink-950 tracking-wide">
              soft design <br /> strong code
            </h1>
          </div>
          <div>
            <p className="mb-6 lg:mb-10 text-lg lg:text-xl text-pink-950 md:max-w-xl">
              Hi! I&apos;m Weronika Pawlak, and I have 3 years of experience
              building modern websites and web applications. As a front-end
              developer with a passion for design, I combine aesthetics with
              code, so your brand has a stylish and functional online presence.
              I work primarily in React, with attention to detail, UX, and
              responsiveness. Want to create something unique? Get in touch,
              I&apos;d be happy to help.
            </p>
            <Button as="link" href="/contact" text="text-pink-950">
              Contact me
            </Button>
          </div>
        </div>

        <div className="flex-1 m-auto flex flex-row justify-center px-4 lg:px-0 w-3/4">
          <Image
            src="/images/flower-pink.jpg"
            width={600}
            height={800}
            alt="Image of the author of the website"
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default Landing;
