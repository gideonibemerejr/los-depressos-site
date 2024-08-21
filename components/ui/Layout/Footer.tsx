import Link from "next/link";
import Image from "next/image";

import { footer, navigation } from "@/constants";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primaryGreen text-primaryOrange px-8 mb-8 pt-32 w-screen">
      <hr className="text-primaryOrange bg-primaryOrange border-primaryOrange my-20" />
      <div className="flex flex-col">
        <div className="grid place-items-center mb-8">
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
        <nav className="flex md:flex-row flex-wrap justify-center items-center gap-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${"hover:underline hover:text-primaryOrange hover:decoration-primaryOrange"} text-normal font-semibold leading-6 underline-offset-8 text-primaryOrange`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <hr className="text-primaryOrange bg-primaryOrange border-primaryOrange my-20" />
        <div className="flex md:flex-row flex-col-reverse justify-between items-center mb-8">
          <div className="flex md:justify-start justify-center w-full md:w-3/4 gap-2">
            <p className="text-normal font-semibold leading-6 underline-offset-8 text-primaryOrange">
              © {year} Los Depressos
            </p>
            <p className="text-normal font-semibold leading-6 underline-offset-8 text-primaryOrange">
              All Rights Reserved
            </p>
          </div>
          <div className="flex md:justify-end justify-center mb-8 md:mb-0 gap-8 w-full">
            {footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                className={`${"hover:underline hover:text-primaryOrange hover:decoration-primaryOrange"} text-normal font-semibold leading-6 underline-offset-8 text-primaryOrange`}
              >
                <div className="w-6 h-6 text-primaryOrange ">{item.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
