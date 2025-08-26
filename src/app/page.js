"use client";
import Landing from "@/components/Landing";
import Projects from "@/components/project/Projects";
import { useRef } from "react";

export default function Page() {
  const projectsRef = useRef(null);

  return (
    <>
      <Landing projectsRef={projectsRef} />
      <Projects ref={projectsRef} />
    </>
  );
}
