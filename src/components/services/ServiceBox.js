const ServiceBox = ({ title, description, icon }) => {
  return (
    <div
      className="bg-primary-dark text-main-text-dark p-6 lg:px-8 lg:py-10 rounded-xl transition-transform duration-300 ease-out
            origin-left hover:-rotate-2 hover:bg-hover hover:text-primary-dark min-h-50 md:h-60 flex flex-col justify-between"
    >
      <div className="flex flex-row items-center gap-2 lg:gap-4">
        {icon("flex-shrink-0 h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10")}
        <h4 className="font-clash-display font-medium text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl md:mt-4 lg:mt-0 ">
          {title}
        </h4>
      </div>
      <p className="text-sm xl:text-base">{description}</p>
    </div>
  );
};

export default ServiceBox;
