import ProjectCardInfoTech from "../project/ProjectCardInfoTech";

const TechStackBox = ({ title, description, tags }) => {
  return (
    <div className="lg:aspect-square group hover:bg-primary rounded-2xl border-primary border-2 p-8">
      <h3 className="font-clash-display font-medium text-3xl mb-3 text-primary group-hover:text-beige">
        {title}
      </h3>
      <div className="flex flex-col justify-between lg:h-full">
        <div>
          <p className=" group-hover:text-beige py-4 text-xl">{description}</p>
        </div>

        <ProjectCardInfoTech
          tags={tags}
          className="border-main-text-dark text-main-text-dark  group-hover:text-beige group-hover:border-beige"
        />
      </div>
    </div>
  );
};

export default TechStackBox;
