import { GEAR_LIST_CATEGORIES_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { GEAR_LIST_CATEGORIES_QUERY } from "@/sanity/lib/queries";

import { GearListPage } from "@/components";

export default async function GearList() {
	const gearList = await sanityFetch<GEAR_LIST_CATEGORIES_QUERYResult>({
		query: GEAR_LIST_CATEGORIES_QUERY,
	});
	return <GearListPage gearList={gearList} />;
}
