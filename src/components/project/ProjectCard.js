import ProjectCardInfo from "./ProjectCardInfo";
import Flower1 from "../../../public/images/flower-dark.jpg";
import Flower2 from "../../../public/images/fruit.webp";
import Flower3 from "../../../public/images/flower-pink.jpg";
import Flower4 from "../../../public/images/flowers-white.jpg";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 text-beige">
      <ProjectCardInfo
        link="https://github.com/vokx7/beautycare-management-app"
        image={Flower1}
        details="A web application that allows you to manage a company in the beauty industry."
        title="BeautyCare Management App"
        tags={["Vite", "React", "Tailwind CSS", "Next.js"]}
      />
      <ProjectCardInfo
        link="https://github.com/vokx7/online-store-client"
        image={Flower2}
        details="A simplified version of the online store client."
        title="Online Store Client"
        tags={[
          "Vite",
          "React",
          "TypeScript",
          "React Context",
          "React Router",
          "CSS",
          "localStorage",
          "Multi-Page Application",
        ]}
      />{" "}
      <ProjectCardInfo
        link="https://transporter-travel.pl/"
        image={Flower3}
        details="Modern website for a travel agency, built with Next.js. It provides users with an intuitive and seamless experience for exploring travel destinations and booking trips."
        title="Transporter Travel"
        tags={[
          "JavaScript",
          "React",
          "Tailwind CSS",
          "Next.js",
          "SEO",
          "Node.js",
        ]}
      />
      <ProjectCardInfo
        link="https://jw-fotografia.vercel.app/"
        image={Flower4}
        details="JW Fotografia is a professional photography portfolio website built with Next.js. It showcases the photographer's work with a visually appealing and responsive design."
        title="JW Fotografia"
        tags={["React", "JavaScript", "Next.js", "CSS", "SEO"]}
      />{" "}
    </div>
  );
};

export default ProjectCard;
