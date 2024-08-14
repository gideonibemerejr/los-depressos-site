import { HOME_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";
// import { getCachedClient } from "lib/sanity";

import { HomePage } from "@/components";

export default async function Home() {
	const home = await sanityFetch<HOME_QUERYResult>({
		query: HOME_QUERY,
	});

	return <HomePage home={home} />;
}
