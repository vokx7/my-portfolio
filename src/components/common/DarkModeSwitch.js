import { CiLight, CiDark } from "react-icons/ci";

const DarkModeSwitch = () => {
  return (
    <div className="rounded-full border-2 border-main-text-dark">
      <CiDark />
      <CiLight />
    </div>
  );
};

export default DarkModeSwitch;
