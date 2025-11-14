import Link from "next/link";
import { useMemo } from "react";

const Button = ({
  disabled,
  className,
  children,
  variant = "primary",
  onClick,
  as = "link",
  href = "",
}) => {
  const primaryClasses = "bg-cta text-secondary-dark";

  const outlinedClasses = "bg-hover text-secondary-dark";

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
        className={`inline-flex items-center h-12 rounded-4xl px-10 text-center gap-4 font-medium hover:font-bold ${selectedClasses} ${className}`}
      >
        {children}
      </Link>
    );
  if (as === "a")
    return (
      <a
        href={href}
        target="_blank"
        className={`inline-flex items-center rounded-4xl text-center gap-4 font-medium hover:font-bold ${selectedClasses} ${className}`}
      >
        {children}
      </a>
    );

  return (
    <button
      disabled={disabled}
      as="button"
      type="button"
      onClick={onClick}
      className={`inline-flex items-center h-8 rounded-4xl px-6 text-center gap-4 font-medium hover:font-bold ${selectedClasses} ${className} cursor-pointer `}
    >
      {children}
    </button>
  );
};

export default Button;
