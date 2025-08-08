import { useMemo } from "react";

const Button = ({ children, variant = "primary" }) => {
  const primaryClasses = "border-primary bg-primary hover:bg-transparent";

  const outlinedClasses =
    "border-primary bg-transparent text-beige hover:bg-primary hover:text-myblack";

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
      className={`h-14 rounded-4xl border-2 px-7 text-center ${selectedClasses}`}
    >
      <span className="text-lg">{children}</span>
    </button>
  );
};

export default Button;
