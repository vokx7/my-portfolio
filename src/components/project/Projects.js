import ProjecBox from "./ProjectBox";
import BeautyCare from "../../../public/images/beautycare2.jpeg";
import OnlineStore from "../../../public/images/onlinestore.jpeg";
import TransporterTravel from "../../../public/images/transporter2.jpeg";
import JWFotografia from "../../../public/images/jwfotografia.jpeg";

const Projects = () => {
  return (
    <section
      data-color="reversed"
      id="projects"
      className="bg-primary-light dark:bg-primary-dark pb-24 min-h-screen relative"
    >
      <div className="max-w-[120rem] m-auto px-6 lg:px-12">
        <h2 className="font-clash-display text-main-text-light dark:text-main-text-dark text-6xl md:text-8xl py-22">
          selection <br /> of <span className="highlight">projects</span>{" "}
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row gap-4 group">
            <ProjecBox
              title="BeautyCare Management App"
              details="A web application that allows you to manage a company in the beauty industry."
              tags={[
                "Vite",
                "React",
                "React Query",
                "Styled Components",
                "React Router",
              ]}
              image={BeautyCare}
              href={"/blog/beautycare-management-app"}
            />
            <ProjecBox
              title="Online Store Client"
              details="A simplified version of the online store client."
              tags={[
                "React",
                "TypeScript",
                "Context",
                "React Router",
                "Multi-Page Application",
              ]}
              image={OnlineStore}
              href={"/blog/online-store-client"}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 group">
            <ProjecBox
              title="Transporter Travel"
              details="Modern website for a travel agency. It provides users with an intuitive and seamless experience."
              tags={[
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Next.js",
                "SEO",
                "Node.js",
              ]}
              image={TransporterTravel}
              href={"/blog/transporter-travel"}
            />
            <ProjecBox
              title="JW Fotografia"
              details="Professional photography portfolio website."
              tags={["React", "JavaScript", "Next.js", "CSS", "SEO"]}
              image={JWFotografia}
              href={"/blog/jw-fotografia"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
