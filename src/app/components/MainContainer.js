const MainContainer = ({ children, height }) => {
  return <div className={`max-w-[120rem] m-auto ${height}`}>{children}</div>;
};

export default MainContainer;
