// import { draftMode } from "next/headers";
// import { getCachedClient } from "lib/sanity";

import { HomePage } from "@/components";
import { getHome } from "./utils";

export default async function Home() {
  const home = await getHome();

  return <HomePage home={home} />;
}
