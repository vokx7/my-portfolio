import { NavElements } from "./Navigation";
import MainContainer from "./common/MainContainer";
import Button from "./common/Button";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { MoveRight } from "./animate-ui/icons/move-right";

const Footer = () => {
  return (
    <footer data-color="reversed">
      <MainContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-main-text-dark m-14">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-cta">
              sitemap
            </h4>
            <NavElements className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-cta hover:text-cta after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-cta">
              let&apos;s social
            </h4>
            <ul className="flex flex-col gap-4 text-main-text-dark">
              <li>
                <a
                  href="mailto:pawlak-weronika@outlook.com"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-cta hover:text-cta after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vokx7"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-cta hover:text-cta after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
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
            <h4 className="text-xl font-semibold tracking-wide py-6 text-cta">
              get in touch
            </h4>
            <h3 className="font-clash-display text-4xl">
              I&apos;d love to hear about your project. Let&apos;s build
              something unique together.
            </h3>
            <AnimateIcon animateOnHover>
              <Button
                as="a"
                href="mailto:pawlak-weronika@outlook.com"
                className={"w-54"}
              >
                Email me
                <MoveRight />
              </Button>
            </AnimateIcon>
          </div>
        </div>
        <div className="text-center md:text-end text-sm text-primary-dark py-10 md:px-4 lg:px-14">
          <p>All rights reserved &#169; Weronika Pawlak 2025</p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
