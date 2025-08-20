"use client";
import Link from "next/link";
import MainContainer from "./MainContainer";
import { useEffect, useState } from "react";

export const NavElements = ({ className, onClick }) => {
  return (
    <>
      <Link href="/" className={className} onClick={onClick}>
        home
      </Link>
      <Link href="/#projects" className={className} onClick={onClick}>
        projects
      </Link>
      <Link href="/about" className={className} onClick={onClick}>
        about
      </Link>
      <Link href="/contact" className={className} onClick={onClick}>
        contact
      </Link>
    </>
  );
};

const Nav = ({ isMainVisible }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);
  return (
    <nav className="text-2xl fixed top-0 right-0 px-10 py-4 my-10 z-50">
      <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            isMainVisible ? "bg-primary" : "bg-beige"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            isMainVisible ? "bg-primary" : "bg-beige"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 animate-pulse  ${
            isMainVisible ? "bg-primary" : "bg-beige"
          }`}
        ></span>
      </div>

      <div
        className={`${
          isNavOpen
            ? "fixed top-0 left-0 w-full h-screen z-50 bg-white/80 backdrop-blur-lg flex flex-col items-center justify-center gap-10"
            : "hidden"
        }`}
      >
        <div onClick={() => setIsNavOpen(false)}>
          <svg
            className="h-18 w-18 md:h-22 md:w-22 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.0"
            strokeLinecap="inherit"
            strokeLinejoin="inherit"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <NavElements
          onClick={() => setIsNavOpen(false)}
          className="text-6xl md:text-8xl xl:text-9xl text-primary font-clash-display font-medium tracking-wide"
        />
      </div>
    </nav>
  );
};

const Navigation = () => {
  const [isMainVisible, setIsMainVisible] = useState(true);

  useEffect(() => {
    const mainSection = document.querySelector("#main");
    if (!mainSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMainVisible(entry.isIntersecting);
      },
      { rootMargin: "-64px" }
    );

    observer.observe(mainSection);

    return () => observer.disconnect();
  }, []);

  return (
    <MainContainer>
      <div className="flex flex-row items-center justify-between  ">
        <div className="fixed top-0 left-0 px-10 py-4 my-10 z-40">
          <Link
            href="/"
            className={`font-clash-display text-2xl tracking-wide ${
              isMainVisible ? "text-primary" : "text-beige"
            }`}
          >
            w. pawlak
          </Link>
        </div>
        <Nav isMainVisible={isMainVisible} />
      </div>
    </MainContainer>
  );
};

export default Navigation;
