"use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

import ProjectCard from "./ProjectCard";

// const projects = [
//   "/images/flower-dark.jpg",
//   "/images/fruit.webp",
//   "/images/flower-pink.jpg",
//   "/images/flowers-white.jpg",
// ];

const Projects = () => {
  return (
    <section
      data-color="reversed"
      id="projects"
      className="bg-secondary-dark pb-24 min-h-screen relative"
    >
      <div className="max-w-[120rem] m-auto px-6 lg:px-12">
        <h2 className="font-clash-display text-main-text-dark text-6xl md:text-8xl 2xl:text-9xl py-22">
          selection <br /> of <span className="highlight">projects</span>{" "}
        </h2>
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 text-main-text-dark"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((src, i) => (
            <div
              key={i}
              className="relative w-full aspect-[2/3] overflow-hidden rounded-2xl shadow-lg"
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </motion.div> */}

        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
