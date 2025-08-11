import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="bg-pink-950 md:h-svh pb-24">
      <div className="max-w-[100rem] m-auto px-6 lg:px-12 ">
        <div className="py-25 font-clash-display text-6xl md:text-9xl text-beige">
          <h2>
            selection <br /> of projects
          </h2>
        </div>

        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
