"use client";
import Byline from "@/components/Byline";
import CarouselComponent from "@/components/ui/CarouselGallery";
import GridGallery from "@/components/ui/GridGallery";
import {
  Byline as BylineType,
  Home as HomeType,
  ImageGallery,
} from "@/sanity.types";

const Home = ({ home }: { home: HomeType }) => {
  const carousel: ImageGallery = home?.pageBuilder?.[0] as ImageGallery;
  const byline: BylineType = home?.pageBuilder?.[1] as BylineType;
  const gallery: ImageGallery = home?.pageBuilder?.[2] as ImageGallery;

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-between bg-primaryGreen text-primaryOrange">
        <CarouselComponent value={carousel} />
        <Byline
          logo={byline.logo}
          text={byline.text}
          callToAction={byline.callToAction}
          links={byline.links}
          _type={byline._type}
        />
        <GridGallery value={gallery} />
      </main>
    </>
  );
};

export default Home;
