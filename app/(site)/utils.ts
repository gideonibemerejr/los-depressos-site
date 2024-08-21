import { cache } from "react";

import {
  ABOUT_QUERYResult,
  GEAR_LIST_CATEGORIES_QUERYResult,
  GEAR_LIST_CATEGORY_QUERYResult,
  GEAR_LIST_DETAILS_QUERYResult,
  GEAR_LIST_FULL_QUERYResult,
  HOME_QUERYResult,
} from "@/sanity.types";
import {
  ABOUT_QUERY,
  GEAR_LIST_CATEGORIES_QUERY,
  GEAR_LIST_CATEGORY_QUERY,
  GEAR_LIST_DETAILS_QUERY,
  GEAR_LIST_FULL_QUERY,
  HOME_QUERY,
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
  const gearCategory = await sanityFetch<GEAR_LIST_CATEGORY_QUERYResult>({
    query: GEAR_LIST_CATEGORY_QUERY,
    params: {
      keyword: slug,
    },
  });

  return gearCategory;
});

export const getFullGearList = cache(async () => {
  const fullGearList = await sanityFetch<GEAR_LIST_FULL_QUERYResult>({
    query: GEAR_LIST_FULL_QUERY,
  });

  return fullGearList;
});

export const getAbout = cache(async () => {
  const about = await sanityFetch<ABOUT_QUERYResult>({
    query: ABOUT_QUERY,
  });

  return about?.[0];
});

export const getHome = cache(async () => {
  const home = await sanityFetch<HOME_QUERYResult>({
    query: HOME_QUERY,
  });

  return home?.[0];
});
