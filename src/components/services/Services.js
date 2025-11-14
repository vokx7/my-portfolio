import { AnimateIcon } from "../animate-ui/icons/icon";
import { MoveRight } from "../animate-ui/icons/move-right";
import Button from "../common/Button";
import MainContainer from "../common/MainContainer";
import ServiceBox from "./ServiceBox";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiCubeTransparent } from "react-icons/hi2";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlinePaintBrush } from "react-icons/hi2";

const Services = () => {
  return (
    <section className="bg-secondary-dark">
      <MainContainer className="py-20 p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          <div className="flex flex-col text-main-text-dark md:gap-2 xl:gap-0">
            <h2 className="font-clash-display text-4xl 2xl:text-5xl py-10 md:py-0 xl:py-5 2xl:py-10">
              <span className="highlight">services</span>I provide
            </h2>
            <p className="font-medium pb-4 max-w-120 text-sm xl:text-base">
              I create modern, efficient, and user-friendly web solutions. I pay
              attention to every detail, from aesthetics and performance to
              intuitive user experiences.
            </p>
            <AnimateIcon animateOnHover>
              <Button as="link" href="/contact" className={"w-58 bg-hover"}>
                Let&apos;s talk
                <MoveRight />
              </Button>
            </AnimateIcon>
          </div>
          <ServiceBox
            icon={(className) => <HiMiniCodeBracket className={className} />}
            title="Front-End Development"
            description="Creating modern, responsive interfaces based on the latest technologies. Prioritizing performance, accessibility, and the highest code quality."
          />
          <ServiceBox
            icon={(className) => (
              <HiOutlineComputerDesktop className={className} />
            )}
            title="Web Development"
            description="Comprehensive creation of websites and web applications. From operational logic to integration with backend and external systems."
          />
          <ServiceBox
            icon={(className) => <HiOutlinePaintBrush className={className} />}
            title="UI/UX Design"
            description="Designing intuitive and aesthetically pleasing user experiences. Analyzing audience needs and translate them into a clear, user friendly interface."
          />
          <ServiceBox
            icon={(className) => (
              <HiOutlineRocketLaunch className={className} />
            )}
            title="SEO & Web Optimization"
            description="Optimizing the performance and structure of pages to make them fast, search engine friendly, and better convert traffic into real results."
          />
          <ServiceBox
            icon={(className) => <HiCubeTransparent className={className} />}
            title="CMS & Headless Integration"
            description="Flexible solutions based on headless CMS. Fast content management, easy expansion and full support for modern front-end architectures."
          />
        </div>
      </MainContainer>
    </section>
  );
};

export default Services;
