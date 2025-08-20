import Link from "next/link";
import { NavElements } from "./Navigation";
import MainContainer from "./MainContainer";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-stone-800">
      <div className="py-14 lg:py-24 text-center">
        <Link
          href="/"
          className="font-clash-display text-6xl lg:text-9xl tracking-wide text-beige "
        >
          w. pawlak
        </Link>
      </div>
      <hr className="text-beige w-full" />
      <MainContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-beige m-14 ">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-red-100">
              sitemap
            </h4>
            <NavElements className={""} />
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
                  className=""
                >
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/vokx7" target="_blank" className="">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/weronika-pawlak-605596256/"
                  target="_blank"
                  className=""
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
              Whether you have a clear vision or just a spark of an idea,
              I&apos;m here to help you bring it to life. Let&apos;s make
              something amazing!
            </h3>
            <Button variant="outlined">Email me</Button>
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
