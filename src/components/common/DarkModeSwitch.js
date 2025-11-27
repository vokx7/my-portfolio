import { CiLight, CiDark } from "react-icons/ci";

const DarkModeSwitch = () => {
  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleMode}
      className="dark:bg-primary-dark bg-primary-light rounded-full p-2"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        <CiDark
          size={30}
          className="dark:opacity-100 dark:scale-100 absolute transition-all duration-300 opacity-0 scale-75 text-main-text-dark"
        />
        <CiLight
          size={30}
          className="absolute transition-all duration-300 opacity-100 scale-100 dark:opacity-0 dark:scale-75text-secondary-dark"
        />
      </div>
    </button>
  );
};

export default DarkModeSwitch;
