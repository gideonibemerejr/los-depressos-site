import { HOME_QUERYResult } from "@/sanity.types";

const Home = ({ home }: { home: HOME_QUERYResult }) => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primaryGreen text-primaryOrange">
			<div>{JSON.stringify(home)}</div>
		</main>
	);
};

export default Home;
