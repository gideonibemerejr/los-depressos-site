import { groq } from "next-sanity";

export const HOME_QUERY = groq`*[_type == "home"]`;

export const GEAR_LIST_CATEGORIES_QUERY = groq`*[_type == "gearItemType"]{
  _id,
  name,
  icon,
  slug
}`;

export const GEAR_LIST_DETAILS_QUERY = groq`*[_type == "gearList" && category->slug.current == $keyword]{
_id,
name,
category->{
  name,
  icon
},
serialNumber,
slug,
image,
description
}`;

export const GEAR_LIST_CATEGORY_QUERY = groq`*[_type == "gearItemType" && slug.current == $keyword]{
  _id,
  name,
  icon
}`;

export const GEAR_LIST_FULL_QUERY = groq`*[_type == "gearList"]{
  _id,
  name,
  serialNumber,
  description,
  image,
  "categorySlug": category->slug.current,
  "slug": slug.current,  
}`;

export const ABOUT_QUERY = groq`*[_type == "aboutPage"]`;
