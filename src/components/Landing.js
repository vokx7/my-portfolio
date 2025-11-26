"use client";
import Image from "next/image";
import Button from "./common/Button";
import MainContainer from "./common/MainContainer";
import LandingPhoto from "../../public/images/flowers.jpg";

import { motion } from "motion/react";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { MoveRight } from "./animate-ui/icons/move-right";
import { useRef, useState } from "react";
import WindowAlert from "./common/WindowAlert";
import SeeProjectsButton from "./common/SeeProjectsButton";
import MyFlower from "./common/MyFlower";

const Landing = () => {
  const constraintsRef = useRef(null);

  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        "https://dog.ceo/api/breed/terrier/yorkshire/images/random"
      );
      const res = await data.json();

      const top = Math.random() * 100;
      const left = Math.random() * 80;

      const newDog = {
        id: Date.now(),
        src: res.message,
        top,
        left,
      };

      setTimeout(() => {
        setDogImages((prev) => [...prev, newDog]);
        setLoading(false);
      }, 1000);
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
      className="flex flex-col lg:flex-row justify-center gap-6 min-h-screen mt-26 lg:mt-0"
    >
      <MainContainer>
        <div
          ref={constraintsRef}
          className="relative px-8 lg:px-0 md:flex md:flex-col md:justify-between md:pb-10"
        >
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

          <MyFlower constraintsRef={constraintsRef} />
        </div>

        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.2}
          className="flower absolute top-40 left-30 bg-cta lg:hidden"
        />
      </MainContainer>

      <div className="relative w-full lg:w-1/3 h-[80vh] lg:h-auto overflow-r-hidden">
        <Image
          src={LandingPhoto}
          alt="Image of the author of the website"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <WindowAlert onClick={generateImage} loading={loading} />
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
      <SeeProjectsButton onClick={scrollToProjects} />
    </section>
  );
};

export default Landing;
