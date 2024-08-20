import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { Byline as BylineProps } from "@/sanity.types";
import BylineLink from "./Link";
import ControlRoom from "../Icons/ControlRoom";
import Instruments from "../Icons/Instruments";
import Clients from "../Icons/Clients";
import Other from "../Icons/Other";

const Byline = ({ text, callToAction, links }: BylineProps) => {
  const renderLinks = (link: string | undefined, text: string | undefined) => {
    switch (link) {
      case "/studio":
        return (
          <BylineLink
            key={link}
            icon={<ControlRoom />}
            text={text}
            description="A Unique Recording Experience"
            link={link}
          />
        );
      case "/gear-list":
        return (
          <BylineLink
            key={link}
            icon={<Instruments />}
            text={text}
            description="Our Extensive Gear List"
            link={link}
          />
        );
      case "/clients":
        return (
          <BylineLink
            key={link}
            icon={<Clients />}
            text={text}
            description="Legendary List of Clients"
            link={link}
          />
        );
      case "/services":
        return (
          <BylineLink
            key={link}
            text={text}
            description="What We Can Do"
            link={link}
            icon={<Other />}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center w-[100vw]">
      <div className="flex flex-col justify-center items-center w-[100vw] px-4 py-20">
        <div className="lg:w-[156px] lg:h-[158px] md:w-[206px] md:h-[208px] w-[106px] h-[108px] relative lg:mb-12 md:mb-8 mb-4">
          <Image
            priority
            sizes="100vw"
            src="/images/logo-orange.png"
            alt="Los Depressos Logo"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-center lg:max-w-4xl md:max-w-2xl text-lg md:text-2xl mb-8">
            {text}
          </p>
          <Link href={callToAction?.link || "/"}>
            <Button>{callToAction?.text}</Button>
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center w-[100vw] lg:min-h-[30vw] md:min-h-[40vw] min-h-[40vw] bg-primaryOrange text-primaryGreen py-20 px-4">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-32 gap-16">
          {" "}
          {links?.map((link) => renderLinks(link?.link, link?.text))}{" "}
        </div>
      </div>
    </div>
  );
};

export default Byline;
