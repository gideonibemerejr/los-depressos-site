"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageComponent from "./Image";
import { SanityImage } from "@/typings";

function CarouselComponent({ value: { images } }: { value: any }) {
	return (
		<div className="">
			<Carousel
				infiniteLoop={true}
				autoPlay={true}
				swipeable={true}
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
			>
				{images?.map((image: SanityImage) => (
					<div key={image._key} className="max-h-[650px] overflow-hidden">
						<ImageComponent value={image} />
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default CarouselComponent;
