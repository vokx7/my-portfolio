const ProjectCardInfoTech = ({ tags, className }) => {
  return (
    <div className="inline-flex flex-wrap gap-4 ">
      {tags.map((tag, i) => (
        <p
          key={i}
          className={`text-sm rounded-lg text-secondary-dark bg-main-text-dark px-4 py-[5px] tracking-wide transition-colors duration-300 ${className}`}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default ProjectCardInfoTech;
