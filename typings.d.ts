export declare const internalGroqTypeReferenceTo: unique symbol;

type Link = {
	label: string;
	value: string;
	href: string;
};

type Navigation = {
	label: string;
	value: string;
	href: string;
};

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
