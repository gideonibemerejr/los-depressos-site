import Image from "next/image";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
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
      <p className="text-xl text-primaryOrange font-bold">Loading...</p>
    </div>
  );
}

export default Loading;
