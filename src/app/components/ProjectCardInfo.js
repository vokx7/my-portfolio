import FlowerShape from "./FlowerShape";
import ProjectCardInfoTech from "./ProjectCardInfoTech";

const ProjectCardInfo = ({ link, image, details, title, tags }) => {
  return (
    <div className="aspect-[2/3] group lg:hover:bg-stone-800 rounded-2xl">
      <a href={link} target="_blank" className="block w-full h-full">
        <div
          className={`relative rounded-2xl w-full h-full bg-cover overflow-hidden bg-[url(${image})]`}
        >
          <div className="hidden lg:flex absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/80 items-center justify-center">
            <FlowerShape className="hidden group-hover:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <p className="relative hidden group-hover:block text-center z-50 max-w-[60%] text-primary font-medium italic font-cormorant-garamond tracking-wide">
              {details}
            </p>
          </div>
        </div>
      </a>
      <div className="pt-2 py-4 lg:group-hover:px-6">
        <h4 className="tracking-wide text-xl py-4 lg:group-hover:font-medium">
          {title}
        </h4>
        <ProjectCardInfoTech tags={tags} />
      </div>
    </div>
  );
};

export default ProjectCardInfo;
