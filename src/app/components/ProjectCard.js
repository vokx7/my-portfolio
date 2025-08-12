const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
      <div className="aspect-[2/3]">
        <div className="rounded-4xl bg-[url(/images/me.webp)] bg-cover w-full h-full"></div>
      </div>
      <div className="aspect-[2/3]">
        <div className="rounded-4xl bg-[url(/images/me.webp)] bg-cover w-full h-full"></div>
      </div>
      <div className="aspect-[2/3]">
        <div className="rounded-4xl bg-[url(/images/me.webp)] bg-cover w-full h-full"></div>
      </div>
      <div className="aspect-[2/3]">
        <div className="rounded-4xl bg-[url(/images/me.webp)] bg-cover w-full h-full"></div>
      </div>
      {/* <div className="">
     
        <h4 className="font-clash-display tracking-wide text-2xl py-8 italic font-light">
          BeautyCare Management App
        </h4>
        <h3 className="text-4xl font-light font-clash-display">
          Aplikacja do zarządzania historią wizyt dla branży beauty.
        </h3>
        <div className="inline-flex flex-wrap gap-4 py-6">
          <p className="rounded-4xl bg-white text-myblack px-4 py-[5px] text-sm tracking-wide">
            Vite
          </p>
          <p className="rounded-4xl bg-white text-myblack px-4 py-[5px] text-sm tracking-wide">
            React
          </p>
          <p className="rounded-4xl bg-white text-myblack px-4 py-[5px] text-sm tracking-wide">
            JavaScript
          </p>
          <p className="rounded-4xl bg-white text-myblack px-4 py-[5px] text-sm tracking-wide">
            React Query
          </p>
          <p className="rounded-4xl bg-white text-myblack px-4 py-[5px] text-sm tracking-wide">
            Styled Components
          </p>
        </div>
        </div> */}
    </div>
  );
};

export default ProjectCard;
