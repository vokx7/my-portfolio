"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, src: "/images/flower-dark.jpg", title: "Dark Flower" },
  { id: 2, src: "/images/fruit.webp", title: "Fruit" },
  { id: 3, src: "/images/flower-pink.jpg", title: "Pink Flower" },
  { id: 4, src: "/images/flowers-white.jpg", title: "White Flowers" },
];

export default function ProjectStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-[600px] h-[500px] mx-auto flex items-center justify-center overflow-visible">
      {projects.map((proj, i) => {
        const offset = i - activeIndex;

        if (Math.abs(offset) > 1) return null;

        const isActive = offset === 0;
        const x = offset * 100;
        const scale = isActive ? 1 : 0.9;
        const opacity = isActive ? 1 : 0.6;
        const zIndex = isActive ? 10 : 5;
        const blur = isActive ? "blur(0px)" : "blur(2px)";

        return (
          <motion.div
            key={proj.id}
            onClick={() => setActiveIndex(i)}
            animate={{ x, scale, opacity, filter: blur }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute w-[400px] h-[600px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            style={{ zIndex }}
          >
            <Image
              src={proj.src}
              alt={proj.title}
              fill
              className="object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
