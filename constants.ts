import { Metadata } from "next";

export const navigation: Link[] = [
	{
		label: "Home",
		value: "home",
		href: "/",
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
		label: "About",
		value: "about",
		href: "/about",
	},
	{
		label: "Contact",
		value: "contact",
		href: "/contact",
	},
];

export const footer: Link[] = [
	{
		label: "Instagram",
		value: "instagram",
		href: "https://www.instagram.com",
	},
	{
		label: "Email",
		value: "email",
		href: "mailto:anish@losdepressos.com",
	},
];

const homeMeta: Metadata = {
	title: "Los Depressos | Home",
	description:
		"Los Depressos Studios is a premier multimedia studio for world-class artists and creatives of all kinds",
	openGraph: {
		title: "Los Depressos | Home",
		description:
			"Los Depressos Studios is a premier multimedia studio for world-class artists and creatives of all kinds",
		url: "https://losdepressos.com",
		type: "website",
		siteName: "Los Depressos",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Los Depressos | Home",
		description:
			"Los Depressos Studios is a premier multimedia studio for world-class artists and creatives of all kinds",
		images: {
			url: "https://losdepressos.com/",
			alt: "Los Depressos | Home",
		},
	},
};
