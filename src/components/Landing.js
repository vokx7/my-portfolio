"use client";
import Image from "next/image";
import Button from "./common/Button";
import MainContainer from "./common/MainContainer";
import LandingPhoto from "../../public/images/flowers.jpg";

import { motion, useScroll } from "motion/react";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { MoveRight } from "./animate-ui/icons/move-right";
import { useState } from "react";
// import ProjectStack from "./project/ProjectStack";

const Landing = () => {
  // const { scrollYProgress } = useScroll();

  const [dogImages, setDogImages] = useState([]);

  const generateImage = async () => {
    console.log("hej");
    try {
      const data = await fetch(
        "https://dog.ceo/api/breed/terrier/yorkshire/images/random"
      );
      const res = await data.json();

      const top = Math.random() * 80;
      const left = Math.random() * 80;

      const newDog = {
        id: Date.now(),
        src: res.message,
        top,
        left,
      };

      setDogImages((prev) => [...prev, newDog]);
    } catch (e) {
      console.error("Błąd podczas pobierania zdjęcia:", e);
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById("projects");
    projects.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="main"
      className="relative flex flex-col lg:flex-row justify-center gap-6 min-h-screen mt-26 lg:mt-0"
    >
      <MainContainer>
        <div className="px-8 lg:px-0 md:flex md:flex-col md:justify-between md:pb-10">
          <div>
            <motion.h1
              className="font-clash-display font-bold text-6xl xl:text-8xl 2xl:text-9xl my-10 text-main-text-dark tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              soft design <br /> strong code
            </motion.h1>
          </div>
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="mb-8 lg:mb-10 text-lg lg:text-xl text-main-text-dark md:max-w-2xl"
            >
              Hi, I&apos;m
              <span className="highlight"> Weronika Pawlak</span>, and I have 2
              years of experience building modern websites and web applications.
              As a <span className="highlight">front-end developer</span> with a
              passion for design, I combine aesthetics with code, so your brand
              has a{" "}
              <span className="highlight">
                stylish and functional online presence.
              </span>{" "}
              I work primarily in React, with attention to detail, UX, and
              responsiveness.{" "}
              <span className="highlight">
                Want to create something unique?
              </span>{" "}
              Get in touch, I&apos;d be happy to help.
            </motion.p>
            <motion.div variants={item}>
              <AnimateIcon animateOnHover>
                <Button as="link" href="/contact" className={"w-58"}>
                  Contact me
                  <MoveRight />
                </Button>
              </AnimateIcon>
            </motion.div>
          </motion.div>
        </div>
      </MainContainer>
      <div className="relative w-full lg:w-1/3 h-[80vh] lg:h-auto">
        <Image
          src={LandingPhoto}
          alt="Image of the author of the website"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 w-60 h-40 bg-secondary-dark rounded-xl z-10">
          <div className="bg-primary-dark h-5 w-full flex items-center rounded-t-xl px-1">
            <div className="flex items-center gap-2 p-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57] shadow-sm border border-black/10"></span>
              <span className="w-2 h-2 rounded-full bg-[#febc2e] shadow-sm border border-black/10"></span>
              <span className="w-2 h-2 rounded-full bg-[#28c840] shadow-sm border border-black/10"></span>
            </div>
            <div>
              <p className="text-xs text-main-text-dark font-light pl-1">
                https://dog.ceo/dog-api/
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <p className="text-main-text-dark tracking-wide">
              Would you like to spawn a Yorkie?
            </p>
            <Button as="button" onClick={generateImage} variant="outlined">
              Yes!
            </Button>
          </div>
        </div>
        {dogImages.map((dog) => (
          <div
            key={dog.id}
            className="absolute w-32 h-32 animate-pop"
            style={{
              top: `${dog.top}%`,
              left: `${dog.left}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={dog.src}
              alt="Random Yorkie"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      <motion.button
        onClick={scrollToProjects}
        className="hidden lg:absolute bottom-8 left-1/2 transform -translate-x-1/2 text-main-text-dark lg:flex flex-col items-center gap-2 cursor-pointer hover:text-hover"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        <span className="text-lg font-medium ">See my projects</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </motion.button>
    </section>
  );
};

export default Landing;
