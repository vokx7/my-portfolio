import ProjectCardInfo from "./ProjectCardInfo";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 text-beige">
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image="/images/me.webp"
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image="/images/me.webp"
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />{" "}
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image="/images/me.webp"
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />{" "}
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image="/images/me.webp"
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />
    </div>
  );
};

export default ProjectCard;
