import { ReactNode } from "react";

export declare const internalGroqTypeReferenceTo: unique symbol;

type Link = {
  label: string | ReactNode;
  value: string;
  href: string;
};

type Navigation = Link[];

type SanityImage = {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
};
