const Projects = () => {
  return (
    <div className="bg-white h-svh">
      <div className="max-w-[90rem] m-auto px-6 lg:px-12 ">
        <div className="py-25 font-clash-display text-4xl">
          <h2>
            selection <br /> of projects
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row gap-10 bg-beige p-8 lg:h-[clamp(20rem,40vw,35rem)]">
          <div className="relative flex-1 w-full">
            <div className="rounded-4xl lg:absolute lg:top-0 lg:left-0 bg-[url(/images/me.webp)] bg-cover w-full aspect-square"></div>
          </div>
          <div className="flex-1">
            <p className="font-cormorant-garamond tracking-wide text-xl italic text-end">
              PROJ.001
            </p>
            <h4 className="font-clash-display tracking-wide text-2xl py-8 italic">
              BeautyCare Management App
            </h4>
            <h3 className="text-3xl font-light">
              Aplikacja do zarządzania historią wizyt dla branzy beauty.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
