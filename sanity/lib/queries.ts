import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"]`;

export const GEAR_LIST_CATEGORIES = groq`*[_type == "gearItemType"]`;
