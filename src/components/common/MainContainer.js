const MainContainer = ({ children, height, className }) => {
  return (
    <div className={`max-w-[120rem] m-auto ${height} ${className}`}>
      {children}
    </div>
  );
};

export default MainContainer;
