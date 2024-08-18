"use client";
import Byline from "@/components/Byline";
import CarouselComponent from "@/components/ui/CarouselGallery";
import GridGallery from "@/components/ui/GridGallery";
import { Byline as BylineType, ImageGallery } from "@/sanity.types";

const Home = ({ home = [] }: { home: any }) => {
	const carousel: ImageGallery = home?.[0]?.pageBuilder?.[0];
	const byline: BylineType = home?.[0]?.pageBuilder?.[1];
	const gallery: ImageGallery = home?.[0]?.pageBuilder?.[2];

	return (
		<>
			<main className="flex flex-col min-h-screen items-center justify-between bg-primaryGreen text-primaryOrange">
				<CarouselComponent value={carousel} />
				<Byline
					logo={byline.logo}
					text={byline.text}
					callToAction={byline.callToAction}
					Links={byline.Links}
					_type={byline._type}
				/>
				<GridGallery value={gallery} />
			</main>
		</>
	);
};

export default Home;
