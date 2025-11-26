import { NavElements } from "./Navigation";
import MainContainer from "./common/MainContainer";
import Button from "./common/Button";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { MoveRight } from "./animate-ui/icons/move-right";

const Footer = () => {
  return (
    <footer data-color="reversed" className="bg-secondary-dark p-10 md:px-15">
      <MainContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-main-text-dark">
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-hover">
              sitemap
            </h4>
            <NavElements className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-hover hover:text-hover after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-hover">
              let&apos;s social
            </h4>
            <ul className="flex flex-col gap-4 text-main-text-dark">
              <li>
                <a
                  href="mailto:pawlak-weronika@outlook.com"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-hover hover:text-hover after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vokx7"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-hover hover:text-hover after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/weronika-pawlak-605596256/"
                  target="_blank"
                  className="relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-hover hover:text-hover after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 col-span-2 items-start">
            <h4 className="text-xl font-semibold tracking-wide py-6 text-hover">
              get in touch
            </h4>
            <h3 className="font-clash-display text-3xl pb-4">
              I&apos;d love to hear about your project. Let&apos;s build
              something unique together.
            </h3>
            <AnimateIcon animateOnHover>
              <Button
                as="a"
                href="mailto:pawlak-weronika@outlook.com"
                className={"w-46 h-12 px-6 bg-hover"}
              >
                Email me
                <MoveRight />
              </Button>
            </AnimateIcon>
          </div>
        </div>
        <div className="text-center md:text-end text-sm text-main-text-dark md:px-4 lg:px-14 pt-12 lg:pt-0">
          <p>All rights reserved &#169; Weronika Pawlak 2025</p>
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
