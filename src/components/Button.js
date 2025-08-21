import Link from "next/link";
import { useMemo } from "react";

const Button = ({
  children,
  variant = "primary",
  text,
  type,
  as = "link",
  href = "",
}) => {
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

  if (as === "link")
    return (
      <Link
        href={href}
        className={`inline-flex items-center h-12 rounded-4xl border-2 px-12 text-center ${selectedClasses}`}
      >
        <span className={text}>{children}</span>
      </Link>
    );
  if (as === "a")
    return (
      <a
        href={href}
        className={`inline-flex items-center h-12 rounded-4xl border-2 px-12 text-center ${selectedClasses}`}
      >
        <span className={text}>{children}</span>
      </a>
    );

  return (
    <button
      className={`h-12 rounded-4xl border-2 px-12 text-center ${selectedClasses} cursor-pointer`}
      type={type}
    >
      <span className={text}>{children}</span>
    </button>
  );
};

export default Button;
