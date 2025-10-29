import Image from "next/image";
import ProjectCardInfoTech from "./ProjectCardInfoTech";
import FlowerShape from "../common/FlowerShape";

const ProjectCardInfo = ({ link, image, details, title, tags }) => {
  return (
    <div className="aspect-[2/3] group lg:hover:bg-primary-dark rounded-2xl">
      <a href={link} target="_blank" className="block w-full h-full">
        <div className="relative rounded-t-2xl w-full h-full bg-cover overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="hidden lg:flex absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/80 items-center justify-center">
            <FlowerShape
              color="#3D4856"
              className="hidden group-hover:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="relative hidden group-hover:block text-center z-50 max-w-[60%] text-main-text-dark font-medium italic font-cormorant-garamond tracking-wide">
              {details}
            </p>
          </div>
        </div>
      </a>
      <div className="h-60 pt-2 py-4 lg:px-4 lg:group-hover:px-6 transition-all duration-300 ease-in-out">
        <h4 className="tracking-wide text-xl py-4 lg:group-hover:font-medium transition-all duration-300 ease-in-out">
          {title}
        </h4>
        <ProjectCardInfoTech
          tags={tags}
          className="text-sm font-light border-main-text-dark text-main-text-dark group-hover:hover group-hover:border-hover group-hover:text-hover transition-colors duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ProjectCardInfo;
