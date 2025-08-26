"use client";
import Image from "next/image";
import Button from "./common/Button";
import MainContainer from "./common/MainContainer";
import Flower from "../../public/images/flower-pink.jpg";

import { motion } from "motion/react";

const Landing = () => {
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
    <MainContainer>
      <section
        id="main"
        className="flex flex-col-reverse lg:flex-row  justify-center gap-6 py-15 pt-35 lg:p-[3rem] lg:py-[12rem] "
      >
        <div className="flex-1 px-8 lg:px-0 md:flex md:flex-col md:justify-between md:pb-10">
          <div>
            <motion.h1
              className="font-clash-display font-bold text-6xl lg:text-9xl my-6 text-pink-950 tracking-wide"
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
              className="mb-6 lg:mb-10 text-lg lg:text-xl text-pink-950 md:max-w-xl"
            >
              Hi! I&apos;m Weronika Pawlak, and I have 2 years of experience
              building modern websites and web applications. As a front-end
              developer with a passion for design, I combine aesthetics with
              code, so your brand has a stylish and functional online presence.
              I work primarily in React, with attention to detail, UX, and
              responsiveness. Want to create something unique? Get in touch,
              I&apos;d be happy to help.
            </motion.p>
            <motion.div variants={item}>
              <Button as="link" href="/contact" text="text-pink-950">
                Contact me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex-1 m-auto flex flex-row justify-center px-4 lg:px-0 w-3/4">
          {" "}
          <Image
            src={Flower}
            width="auto"
            height={800}
            alt="Image of the author of the website"
            priority={1}
          />
        </div>
        <motion.button
          onClick={scrollToProjects}
          className="hidden lg:absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pink-950 lg:flex flex-col items-center gap-2 cursor-pointer hover:text-pink-700 "
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
    </MainContainer>
  );
};

export default Landing;
