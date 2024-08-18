"use client";

import Image from "next/image";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Navigation } from "@/typings";

import { cn } from "@/lib/utils";

function MobileNav({
	currentRoute,
	navigation,
	mobileMenuOpen,
	setMobileMenuOpen,
}: {
	currentRoute: string;
	navigation: Navigation[];
	mobileMenuOpen: boolean;
	setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Dialog
			as="div"
			className="lg:hidden"
			open={mobileMenuOpen}
			onClose={() => setMobileMenuOpen(false)}
		>
			<div className="fixed inset-0 z-50" />
			<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primaryGreen px-4 py-6 sm:ring-1 sm:ring-gray-900/10 grid grid-rows-8">
				<div className="flex items-start justify-between row-span-1 max-h-[116px]">
					<Link
						href="/"
						onClick={() => setMobileMenuOpen(false)}
						className="hover:underline hover:underline-offset-8 hover:text-primaryOrange hover:decoration-primaryOrange -m-1.5 p-1.5"
					>
						<span className="sr-only">Los Depressos</span>
						<Image
							priority
							sizes="100vw"
							src="/images/logo-orange.png"
							alt="Los Depressos Logo"
							width={86}
							height={88}
						/>
					</Link>
					<button
						type="button"
						className="rounded-md p-2.5 text-primaryOrange"
						onClick={() => setMobileMenuOpen(false)}
					>
						<span className="sr-only">Close menu</span>
						<XMarkIcon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="flex px-4 row-span-7 justify-center items-center">
					<div className="-my-6 divide-y divide-gray-500/10">
						<div className=" space-y-16 pb-6 flex flex-col justify-center items-center">
							{navigation.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className={cn(
										"-mx-3 block rounded-lg px-3 py-2 md:text-7xl text-5xl font-semibold leading-7 underline-offset-[1rem] text-primaryOrange",
										currentRoute === item.href
											? "underline underline-offset-[1rem] text-primaryOrange decoration-primaryOrange  hover:text-black hover:decoration-black"
											: "hover:underline hover:underline-offset-[1rem] hover:text-primaryOrange hover:decoration-primaryOrange"
									)}
								>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</Dialog.Panel>
		</Dialog>
	);
}

export default MobileNav;
