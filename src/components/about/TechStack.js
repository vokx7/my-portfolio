import TechStackBox from "./TechStackBox";

const TechStack = () => {
  return (
    <div className=" flex flex-col items-center justify-center xl:gap-8 ">
      <div>
        <h2 className="font-clash-display text-7xl lg::text-9xl font-medium text-center tracking-wide">
          tech stack
        </h2>
      </div>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-8 py-12 md:px-6 mx-auto max-w-[110rem]">
        <TechStackBox
          title="frontend development"
          description="Where creativity meets code - I craft responsive, elegant interfaces
            that feel intuitive and look beautiful."
          tags={[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Vite",
            "Next.js",
            "Wordpress",
            "Flutter",
          ]}
        />
        <TechStackBox
          title="backend development"
          description="The logic behind the scenes - I build lightweight, secure, and scalable
      solutions to keep everything running smoothly."
          tags={["Node.js", "MongoDB", "REST APIs"]}
        />
        <TechStackBox
          title="ui/ux development"
          description="Designing experiences that balance beauty and usability - because great
      design should feel effortless."
          tags={["Figma", "Wireframing", "Prototyping", "User Flows"]}
        />
        <TechStackBox
          title="tools & workflow"
          description="From design to deployment - I rely on modern tools to create, collaborate,
      and deliver with precision."
          tags={["Git & GitHub", "VS Code", "Vercel"]}
        />
      </div>
    </div>
  );
};

export default TechStack;
