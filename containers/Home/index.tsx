"use client";
import CarouselComponent from "@/components/ui/CarouselGallery";
import { HOME_QUERYResult } from "@/sanity.types";

const Home = ({ home = [] }: { home: HOME_QUERYResult }) => {
	console.log("carousel", home?.[0]?.pageBuilder?.[0]);
	console.log("byline", home?.[0]?.pageBuilder?.[1]);
	return (
		<>
			<main className="flex min-h-screen items-center justify-between p-24 bg-primaryGreen text-primaryOrange">
				<CarouselComponent value={home?.[0]?.pageBuilder?.[0]} />
			</main>
			<pre className="db text-primaryOrange">
				{JSON.stringify(home, null, 2)}
			</pre>
		</>
	);
};

export default Home;
