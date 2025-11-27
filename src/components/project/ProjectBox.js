import Image from "next/image";
import ProjectCardInfoTech from "./ProjectCardInfoTech";
import Button from "../common/Button";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { MoveRight } from "../animate-ui/icons/move-right";

const ProjecBox = ({ title, details, tags, image, href }) => {
  return (
    <div className="relative flex-1 md:basis-1/2 transition-all duration-300 bg-secondary-light dark:bg-secondary-dark p-6 group-hover:md:basis-1/4 hover:md:basis-3/4  md:h-100 lg:h-80 2xl:h-70">
      <div className="flex flex-col group/box w-full h-full ">
        <h3 className="font-clash-display text-2xl text-main-text-light dark:text-main-text-dark font-semibold pb-10 pt-2 tracking-wide">
          {title}
        </h3>
        <div className="group-hover/box:max-w-100 2xl:group-hover/box:max-w-none">
          <ProjectCardInfoTech
            tags={tags}
            className="group-hover/box:bg-cta-light dark:group-hover/box:bg-hover"
          />
          <div
            className="overflow-hidden transition-opacity duration-300
            group-hover/box:md:opacity-100 group-hover/box:opacity-100 group-hover:opacity-0"
          >
            <p className="text-sm md:text-base text-main-text-light dark:text-main-text-dark py-5 max-w-100">
              {details}
            </p>
            <div className="lg:absolute bottom-6 left-6">
              <AnimateIcon animateOnHover>
                <Button
                  as="a"
                  href={href}
                  className={"w-48 mb-6 lg:mb-0 px-4 h-10 text-main-text-light"}
                >
                  Find out more
                  <MoveRight />
                </Button>
              </AnimateIcon>
            </div>
          </div>
        </div>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="block lg:absolute right-0 top-0 w-full lg:w-1/2 2xl:w-1/3 h-full object-cover lg:opacity-0 lg:translate-x-10 lg:transition-all duration-500 ease-out lg:group-hover/box:opacity-100 lg:group-hover/box:translate-x-0"
        />
      </div>
    </div>
  );
};

export default ProjecBox;
