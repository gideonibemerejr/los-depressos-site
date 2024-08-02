import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./schemaTypes/blockContentType";
import { gearList, gearItemType } from "./schemaTypes/gear-list";
import { homeType } from "./schemaTypes/homeType";
import { imageGalleryType } from "./schemaTypes/imageGalleryType";
import { servicesType } from "./schemaTypes/servicesType";
import { mediaType } from "./schemaTypes/mediaType";
import { aboutType } from "./schemaTypes/home/about";
import { videoEmbedType } from "./schemaTypes/videoEmbed";
import { byline } from "./schemaTypes/home/byline";
import { linkType } from "./schemaTypes/linkType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		gearList,
		gearItemType,
		homeType,
		servicesType,
		mediaType,
		aboutType,
		imageGalleryType,
		videoEmbedType,
		byline,
		linkType,
	],
};
