import { motion } from "motion/react";

const SeeProjectsButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
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
  );
};

export default SeeProjectsButton;
