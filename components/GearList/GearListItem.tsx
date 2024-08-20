import Link from "next/link";
import ImageComponent from "@/components/ui/Image";

import { cn } from "@/lib/utils";
import { GearItemType } from "@/sanity.types";

const GearListItem = ({ name, icon, slug }: any) => {
	return (
		<li className="flex flex-col justify-center items-center md:w-[25%] w-[100%]">
			<div
				className={cn(
					"w-36 h-36 mb-8"
					// name === "Microphones" ? "h-48 w-48 -mb-4" : ""
				)}
			>
				<ImageComponent value={icon} />
			</div>
			<Link href={`/gear-list/${slug?.current}`}>
				<p className="text-xl text-center underline underline-offset-[.5rem]">
					{name}
				</p>
			</Link>
		</li>
	);
};

export default GearListItem;
