import Image from "next/image";
import Button from "./Button";
// import profile from "./images/me.webp";
const Main = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 p-[6rem]">
      <div className="flex-1 px-4">
        <h1 className="font-clash-display font-bold text-6xl lg:text-8xl my-6">
          soft design <br /> strong code
        </h1>
        <p className="mb-6 text-lg">
          Hi! My name is Weronika, and I have 3 years of experience building
          modern websites and web applications. As a front-end developer with a
          passion for design, I combine aesthetics with code, so your brand has
          a stylish and functional online presence. I work primarily in React,
          with attention to detail, UX, and responsiveness. Want to create
          something unique? Get in touch, I&apos;d be happy to help.
        </p>
        <Button />
      </div>
      <div className="flex-1 m-auto flex flex-row justify-center">
        <Image
          src="/images/me.webp"
          width={400}
          height={600}
          alt="Image of the author of the website"
        />
      </div>
    </div>
  );
};

export default Main;
