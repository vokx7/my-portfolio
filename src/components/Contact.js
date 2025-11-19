"use client";

import Form from "./form/Form";

const Contact = () => {
  return (
    <div className="max-w-[80rem] m-auto px-12 text-primary py-34">
      <h1 className="font-clash-display text-hover font-semibold text-7xl md:text-9xl text-center pb-10">
        <span className="uppercase">let&apos;s </span>get <br /> in{" "}
        <span className="uppercase italic underline">touch</span>
      </h1>
      <div className="flex flex-row pb-10">
        <div className="md:flex-1"></div>
        <div className="md:flex-1 text-main-text-dark">
          {" "}
          <h4 className="max-w-[75%]">
            Whether you have a clear vision or just a spark of an idea, I&apos;m
            here to help you bring it to life. Let&apos;s make something
            amazing. Or if you&apos;re looking to start a conversation about
            future opportunities, my inbox is open - let&apos;s talk!
          </h4>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
