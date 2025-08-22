const ProjectCardInfoTech = ({ tags, className }) => {
  return (
    <div className="inline-flex flex-wrap gap-4">
      {tags.map((tag, i) => (
        <p
          key={i}
          className={`rounded-4xl border-1 px-4 py-[5px] tracking-wide transition-colors duration-300 ${className}`}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default ProjectCardInfoTech;
