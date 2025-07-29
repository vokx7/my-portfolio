"use client";
import Link from "next/link";
import MainContainer from "./MainContainer";
import { useEffect, useState } from "react";

const NavElements = () => {
  return (
    <>
      <Link href="/#projects" className="lg:pr-10 md:pr-5">
        Projects
      </Link>
      <Link href="/#profile" className="lg:pr-10 md:pr-5">
        Profile
      </Link>
      <Link href="/#contact" className="lg:pr-10 md:pr-5">
        Contact
      </Link>
    </>
  );
};

const NavMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isNavOpen]);
  return (
    <nav className="lg:hidden text-2xl">
      <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
        <span className="block h-0.5 w-8 animate-pulse bg-myblack"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-myblack"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-myblack"></span>
      </div>

      <div
        className={`${
          isNavOpen
            ? "fixed top-0 left-0 w-full h-screen z-50 bg-white/80 backdrop-blur-lg flex flex-col items-start justify-start gap-6 px-6 pt-28"
            : "hidden"
        }`}
      >
        <div
          className="absolute top-0 right-0 px-6 py-14"
          onClick={() => setIsNavOpen(false)}
        >
          <svg
            className="h-8 w-8 text-myblack"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <NavElements />
      </div>
    </nav>
  );
};

const Navigation = () => {
  return (
    <MainContainer>
      <div className="flex flex-row items-center justify-between px-5 py-4 my-10 ">
        <div>
          <Link href="/" className="font-clash-display text-2xl tracking-wide">
            w. pawlak
          </Link>
        </div>
        <nav className="hidden lg:block text-lg">
          <NavElements />
        </nav>
        <NavMobile />
      </div>
    </MainContainer>
  );
};

export default Navigation;
