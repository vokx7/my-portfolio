import ProjectCard from "./ProjectCard";

const Projects = ({ ref }) => {
  return (
    <section ref={ref} id="projects" className=" bg-pink-950 pb-24 xl:h-screen">
      <div className="max-w-[120rem] m-auto px-6 lg:px-12 ">
        <div className="py-22 font-clash-display text-6xl md:text-9xl text-beige">
          <h2>
            selection <br /> of projects{" "}
          </h2>
        </div>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
