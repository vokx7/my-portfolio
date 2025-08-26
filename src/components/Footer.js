import Link from "next/link";
import { NavElements } from "./Navigation";
import MainContainer from "./common/MainContainer";
import Button from "./common/Button";

const Footer = () => {
  return (
    <footer className="bg-stone-800">
      <div className="py-14 lg:py-24 text-center">
        <Link
          href="/#main"
          className="font-clash-display text-6xl lg:text-9xl tracking-wide text-beige hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-100 hover:to-red-100 hover:scale-105 transition-all duration-300"
        >
          w. pawlak
        </Link>
      </div>
      <hr className="text-beige w-full" />
      <MainContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-beige m-14 ">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-red-100">
              sitemap
            </h4>
            <NavElements className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-red-100 hover:text-red-100 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-red-100">
              let&apos;s social
            </h4>
            <ul className="flex flex-col gap-4 text-beige">
              <li>
                <a
                  href="mailto:pawlak-weronika@outlook.com"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-red-100 hover:text-red-100 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vokx7"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-red-100 hover:text-red-100 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/weronika-pawlak-605596256/"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-red-100 hover:text-red-100 after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 col-span-2 items-start">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-red-100">
              get in touch
            </h4>
            <h3 className="font-clash-display text-4xl">
              I&apos;d love to hear about your project. Let&apos;s build
              something unique together.
              {/* I&apos;m always excited to work on projects that blend design and
              technology. Tell me your story, and let&apos;s start building. */}
            </h3>
            <Button
              as="a"
              href="mailto:pawlak-weronika@outlook.com"
              variant="outlined"
            >
              Email me
            </Button>
          </div>
        </div>
        <div className="text-center md:text-end text-sm text-beige py-10 md:px-4 lg:px-14">
          <p>All rights reserved &#169; Weronika Pawlak 2025</p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
