import Image from "next/image";
import BlockContent from "../ui/BlockContent";
import ImageComponent from "../ui/Image";

import { AboutPage as AboutPageType } from "@/sanity.types";

const AboutPage = ({ about }: { about: AboutPageType }) => {
  return (
    <div className="flex justify-center items-center w-[100vw] px-8">
      <div className="text-primaryOrange max-w-5xl">
        <div className="grid place-items-center mt-24 mb-8">
          <div className="lg:w-[156px] lg:h-[158px] md:w-[206px] md:h-[208px] w-[176px] h-[178px] relative lg:mb-12 md:mb-8 mb-4">
            <Image
              priority
              sizes="100vw"
              src="/images/logo-orange.png"
              alt="Los Depressos Logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
        <div className="mb-8 flex md:flex-row flex-col gap-8 md:gap-12">
          <div className="md:w-1/2 w-full">
            <ImageComponent value={about.imageOne} />
          </div>
          <div className="md:w-1/2 w-full text-2xl mt-2 !leading-8">
            <BlockContent value={about.lineOne} />
          </div>
        </div>
        <div className="mb-8 mt-12 flex md:flex-row flex-col-reverse gap-8 md:gap-12">
          <div className="md:w-1/2 w-full text-2xl mt-2 !leading-8">
            <BlockContent value={about.lineTwo} />
          </div>
          <div className="md:w-1/2 w-full">
            <ImageComponent value={about.imageTwo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
