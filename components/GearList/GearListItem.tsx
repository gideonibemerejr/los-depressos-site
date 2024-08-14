import Link from "next/link";
import ImageComponent from "@/components/ui/Image";

import { cn } from "@/lib/utils";
import { GearItemType, Slug } from "@/sanity.types";

const GearListItem = ({ name, icon, slug }: GearItemType & { slug: Slug }) => {
	return (
		<li className="flex flex-col justify-center items-center md:w-[25%] w-[100%]">
			<div
				className={cn(
					"w-32 h-32 text-primaryCream mb-8"
					// name === "Microphones" ? "h-48 w-48 -mb-4" : ""
				)}
			>
				<ImageComponent value={icon} />
			</div>
			<Link href={`/gear-list/${slug.current}`}>
				<p className="text-xl text-center">{name}</p>
			</Link>
		</li>
	);
};

export default GearListItem;
