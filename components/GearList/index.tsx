"use client";
import Image from "next/image";
import yamaha from "@/public/images/yamaha2.jpg";
import GearListItem from "./GearListItem";
import { GearItemType } from "@/sanity.types";

const GearList = ({ gearList = [] }: { gearList: any }) => {
	return (
		<>
			<div className="text-primaryOrange">
				<div className="w-full h-[40vh] relative overflow-hidden ">
					<Image
						src={yamaha.src}
						sizes="100vw"
						alt="yamaha2.jpg Image"
						className="w-full h-auto md:absolute top-[-14rem] left-0 object-cover brightness-50"
						height="0"
						width="0"
					/>
					<div className="absolute top-[50%] left-[50%] text-4xl font-medium text-primaryCream translate-y-[-50%] translate-x-[-50%]">
						Gear List
					</div>
				</div>
				{/* subtitle */}
				<div className="w-full flex flex-col justify-center items-center my-6 text-xl lg:text-3xl">
					Explore Our Collections
				</div>
				{/* grid */}
				<ul className="flex flex-wrap gap-16 justify-center items-center py-12">
					{gearList.map((item: GearItemType) => (
						<GearListItem key={item._id} {...item} />
					))}
				</ul>
				<pre>{JSON.stringify(gearList, null, 2)}</pre>
			</div>
		</>
	);
};

export default GearList;
