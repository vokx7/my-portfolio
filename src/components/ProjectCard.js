import ProjectCardInfo from "./ProjectCardInfo";
import Flower1 from "../../public/images/flower-dark.jpg";
import Flower2 from "../../public/images/fruit.webp";
import Flower3 from "../../public/images/flower-pink.jpg";
import Flower4 from "../../public/images/flowers-white.jpg";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 text-beige">
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image={Flower1}
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image={Flower2}
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />{" "}
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image={Flower3}
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />{" "}
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image={Flower4}
        details="Aplikacja webowa pozwalająca na zarządzanie firmą z branzy beauty"
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind", "Next.js"]}
      />
    </div>
  );
};

export default ProjectCard;
