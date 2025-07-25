import Link from "next/link";
import MainContainer from "./MainContainer";

const Navigation = () => {
  return (
    <MainContainer>
      <div className="flex flex-row items-center justify-between px-5 py-4 my-10 ">
        <div>
          <Link href="/" className="font-clash-display text-2xl tracking-wide">
            w. pawlak
          </Link>
        </div>
        <nav className="text-lg">
          <Link href="/#projects" className="lg:pr-10 md:pr-5">
            Projects
          </Link>
          <Link href="/#profile" className="lg:pr-10 md:pr-5">
            Profile
          </Link>
          <Link href="/#contact" className="lg:pr-10 md:pr-5">
            Contact
          </Link>
        </nav>
      </div>
    </MainContainer>
  );
};

export default Navigation;
