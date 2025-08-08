import Link from "next/link";
import { NavElements } from "./Navigation";
import MainContainer from "./MainContainer";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-myblack">
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-beige m-14 ">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-primary">
              sitemap
            </h4>
            <NavElements className={""} />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-primary">
              let&apos;s social
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/weronika-pawlak-605596256/"
                  target="_blank"
                  className=""
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/vokx7"
                  target="_blank"
                  className=""
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vokx7/"
                  target="_blank"
                  className=""
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1 items-start">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-primary">
              get in touch
            </h4>
            <p>
              Your brand deserves a website that truly represents it. Let&apos;s
              team up and make it happen.
            </p>
            <Button variant="outlined">Let&apos;s talk</Button>
          </div>
        </div>
        <div className="text-center md:text-end text-sm text-beige py-10 lg:px-14">
          <p>All rights reserved &#169; Weronika Pawlak 2025</p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
