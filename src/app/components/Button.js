import { useMemo } from "react";

const Button = ({ children, variant = "primary", text }) => {
  const primaryClasses = "border-pink-950 bg-transparent hover:bg-red-100";

  const outlinedClasses =
    "border-red-100 bg-transparent hover:bg-red-100 hover:text-myblack";

  const selectedClasses = useMemo(() => {
    switch (variant) {
      case "outlined":
        return outlinedClasses;
      default:
        return primaryClasses;
    }
  }, [variant]);

  return (
    <button
      className={`h-12 rounded-4xl border-2 px-12 text-center ${selectedClasses}`}
    >
      <span className={text}>{children}</span>
    </button>
  );
};

export default Button;
