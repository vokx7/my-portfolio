"use client";
import Link from "next/link";
import MainContainer from "./common/MainContainer";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const NavElements = ({ className, onClick }) => {
  const links = [
    { href: "/", label: "home" },
    { href: "/#projects", label: "projects" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
    { href: "/blog", label: "blog" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={className}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

const Nav = ({ ref, isReversedColor }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);
  return (
    <nav ref={ref} className="text-2xl fixed top-0 right-0 px-10 py-14 z-50">
      <div
        className="space-y-2 cursor-pointer"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`block h-0.5 w-8 ${
              isReversedColor ? "bg-primary-dark" : "bg-main-text-dark"
            }`}
            animate={
              isNavOpen
                ? i === 0
                  ? { rotate: 45, y: 7 }
                  : i === 1
                    ? { opacity: 0 }
                    : { rotate: -45, y: -7 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen z-50 bg-primary-dark/80 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
          >
            <motion.div
              onClick={() => setIsNavOpen(false)}
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="h-18 w-18 text-main-text-dark cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.div>
            <NavElements
              onClick={() => setIsNavOpen(false)}
              className="text-6xl md:text-8xl xl:text-7xl 2xl:text-9xl text-main-text-dark font-clash-display font-medium tracking-wide relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[4px] after:bg-main-text-dark after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

import { usePathname } from "next/navigation";

const Navigation = () => {
  const navRef = useRef();
  const [isReversedColor, setIsReversedColor] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const reversedSections = Array.from(
      document.querySelectorAll(`[data-color="reversed"]`)
    );
    if (reversedSections.length === 0) return;

    const handleScroll = () => {
      const navHeight = navRef.current.offsetHeight / 2;

      const anyReversedVisible = reversedSections.some((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= navHeight && bottom > navHeight;
      });

      setIsReversedColor(anyReversedVisible);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <MainContainer>
      <div className="flex flex-row items-center justify-between">
        <div className="fixed top-0 left-0 px-10 py-4 my-10 z-40">
          <Link
            href="/"
            className={`font-clash-display text-2xl tracking-wide ${
              isReversedColor ? "text-primary-dark" : "text-main-text-dark"
            }`}
          >
            w. pawlak
          </Link>
        </div>
        <Nav ref={navRef} isReversedColor={isReversedColor} />
      </div>
    </MainContainer>
  );
};

export default Navigation;
