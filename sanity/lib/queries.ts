import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"]`;

export const GEAR_LIST_CATEGORIES_QUERY = groq`*[_type == "gearItemType"]`;

export const GEAR_LIST_DETAILS_QUERY = groq`*[_type == "gearList" && category->slug.current == $keyword]`;

export const GEAR_LIST_CATEGORY = groq`*[_type == "gearItemType" && slug.current == $keyword]`;

export const GEAR_LIST_FULL = groq`*[_type == "gearList"]`;
