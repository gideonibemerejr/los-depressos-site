import { draftMode } from "next/headers";
// import { getCachedClient } from "lib/sanity";

export default function Home() {
	const preview = draftMode().isEnabled
		? { token: process.env.SANITY_API_READ_TOKEN }
		: undefined;

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primaryGreen text-primaryOrange">
			<div>Los Depressos</div>
		</main>
	);
}
