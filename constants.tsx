import { Metadata } from "next";
import { Link } from "./typings";

export const navigation: Link[] = [
  {
    label: "Home",
    value: "home",
    href: "/",
  },
  {
    label: "About",
    value: "about",
    href: "/about",
  },
  {
    label: "Gear List",
    value: "gear-list",
    href: "/gear-list",
  },
  {
    label: "Services",
    value: "services",
    href: "/services",
  },
  {
    label: "Gallery",
    value: "gallery",
    href: "/gallery",
  },

  {
    label: "Contact",
    value: "contact",
    href: "/contact",
  },
];

export const footer: Link[] = [
  {
    label: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          fill="currentColor"
        />
      </svg>
    ),
    value: "instagram",
    href: "https://www.instagram.com/losdepressos/",
  },
  {
    label: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
          fill="currentColor"
        />
      </svg>
    ),
    value: "email",
    href: "mailto:anish@losdepressos.com",
  },
];

export const homeMeta: Metadata = {
  title: "Home | Los Depressos",
  description:
    "Los Depressos Studios is a premier multimedia studio for world-class artists and creatives of all kinds",
  openGraph: {
    title: "Home | Los Depressos",
    description:
      "Los Depressos Studios is a premier multimedia studio for world-class artists and creatives of all kinds",
    url: "https://losdepressos.com",
    type: "website",
    siteName: "Los Depressos",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Los Depressos",
    description:
      "Los Depressos Studios is a premier multimedia studio for world-class artists and creatives of all kinds",
    images: {
      url: "https://losdepressos.com/",
      alt: "Home | Los Depressos",
    },
  },
};
