import React from "react";
import background from "@/app/assets/Background Images (1).png";
import Image from "next/image";
import Button from "../Button";

const CtaSection = () => {
  return (
    <div className="container px-5 md:px-10 mx-auto mt-20">
      <div className="relative">
        <div className="rounded-lg">
          <Image
            src="/assets/Background Images.png"
            alt=""
            width="200"
            height="200"
            quality={100}
            priority
            className="w-full max-lg:min-h-[300px] h-auto object-cover rounded-lg"
          />
        </div>
        <div className="absolute top-0 left-0 z-10 flex max-lg:flex-col justify-between gap-4 w-full p-16 md:pt-24">
          <div className=" max-lg:text-center">
            <h2 className="text-white font-bold text-3xl max-md:text-2xl">
              Start your free trial today!
            </h2>
            <p className="text-[#999999] text-sm">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <div className="max-lg:text-center">
            <Button>Start a Free Trial</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
