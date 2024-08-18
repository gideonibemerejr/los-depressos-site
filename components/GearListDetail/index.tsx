"use client";
import ImageComponent from "../ui/Image";

import {
	GEAR_LIST_CATEGORYResult,
	GEAR_LIST_DETAILS_QUERYResult,
} from "@/sanity.types";
import { cn } from "@/lib/utils";
import GearListDetailItem from "./GearListDetailItem";

const GearListDetailPage = ({
	gearCategory,
	gearListDetail,
}: {
	gearCategory?: GEAR_LIST_CATEGORYResult;
	gearListDetail: GEAR_LIST_DETAILS_QUERYResult;
}) => {
	return (
		<div className="text-primaryOrange mt-12 px-8">
			<section className="flex flex-col justify-center items-center w-[100%]">
				{gearCategory ? (
					<>
						<div
							className={cn(
								"w-36 h-36 mb-8"
								// name === "Microphones" ? "h-48 w-48 -mb-4" : ""
							)}
						>
							<ImageComponent value={gearCategory?.[0]?.icon} />
						</div>

						<p className="text-xl text-center">{gearCategory?.[0]?.name}</p>
					</>
				) : (
					<p className="text-3xl">Full Gear List</p>
				)}
			</section>
			<section className="flex flex-col gap-4 justify-center items-center mt-8">
				{gearListDetail.map((item) => (
					<GearListDetailItem key={item._id} item={item} />
				))}
			</section>
		</div>
	);
};

export default GearListDetailPage;
