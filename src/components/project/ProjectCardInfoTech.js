const ProjectCardInfoTech = ({ tags }) => {
  return (
    <div className="inline-flex flex-wrap gap-4">
      {tags.map((tag, i) => (
        <p
          key={i}
          className="rounded-4xl border-1 border-beige text-beige px-4 py-[5px] text-sm font-light tracking-wide transition-colors duration-300 group-hover:text-red-100 group-hover:border-red-100"
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default ProjectCardInfoTech;
