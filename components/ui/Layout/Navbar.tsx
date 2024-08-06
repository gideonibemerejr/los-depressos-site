import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Navigation } from "@/typings";

const Navbar = ({
	navigation,
	currentRoute,
	setMobileMenuOpen,
}: {
	navigation: Navigation[];
	currentRoute: string;
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<nav className="flex items-center justify-between pr-6" aria-label="Global">
			<Link
				href="/"
				className="hover:underline hover:text-primaryOrange hover:decoration-primaryOrange   -m-1.5 p-1.5"
			>
				<span className="sr-only">/Los Depressos</span>

				<Image
					priority
					sizes="100vw"
					src="/images/logo-orange.png"
					alt="Los Depressos Logo"
					height={86}
					width={88}
				/>
			</Link>
			<button
				type="button"
				className="-m-2.5 rounded-md p-2.5 text-primaryOrange lg:hidden"
				onClick={() => setMobileMenuOpen(true)}
			>
				<span className="sr-only">Open main menu</span>
				<Bars3Icon className="h-8 w-8" aria-hidden="true" />
			</button>
			<div className="hidden lg:ml-12 lg:flex lg:gap-x-14 lg:items-center">
				{navigation.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className={`${
							currentRoute === item.href
								? "underline text-primaryOrange decoration-primaryOrange  hover:text-black hover:decoration-black"
								: "hover:underline hover:text-primaryOrange hover:decoration-primaryOrange"
						} text-sm font-semibold leading-6 underline-offset-8 text-primaryOrange`}
					>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
