import { cache } from "react";

import {
	GEAR_LIST_CATEGORIES_QUERYResult,
	GEAR_LIST_CATEGORYResult,
	GEAR_LIST_DETAILS_QUERYResult,
} from "@/sanity.types";
import {
	GEAR_LIST_CATEGORIES_QUERY,
	GEAR_LIST_CATEGORY,
	GEAR_LIST_DETAILS_QUERY,
	GEAR_LIST_FULL,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";

export const getGearList = cache(async () => {
	const gearList = await sanityFetch<GEAR_LIST_CATEGORIES_QUERYResult>({
		query: GEAR_LIST_CATEGORIES_QUERY,
	});

	return gearList;
});

export const getGearListDetail = cache(async (slug: string) => {
	const gearListDetail = await sanityFetch<GEAR_LIST_DETAILS_QUERYResult>({
		query: GEAR_LIST_DETAILS_QUERY,
		params: {
			keyword: slug,
		},
	});

	return gearListDetail;
});

export const getGearListCategory = cache(async (slug: string) => {
	const gearCategory = await sanityFetch<GEAR_LIST_CATEGORYResult>({
		query: GEAR_LIST_CATEGORY,
		params: {
			keyword: slug,
		},
	});

	return gearCategory;
});

export const getFullGearList = cache(async () => {
	const fullGearList = await sanityFetch({
		query: GEAR_LIST_FULL,
	});

	return fullGearList;
});
