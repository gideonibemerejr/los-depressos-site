import Link from "next/link";

const FullGearList = ({ categories }: { categories: any }) => {
	return (
		<div className="text-primaryOrange flex flex-col md:justify-center md:items-center gap-8 px-8">
			<div className="mt-12 mb-8">
				<p className="text-4xl">Full Gear List</p>
			</div>
			<div className="flex flex-wrap">
				{categories.map((category: any) => (
					<div
						key={category._id}
						className="flex flex-col lg:w-[20%] md:w-[25%] w-[100%] mb-12"
					>
						<Link href={`/gear-list/${category.slug.current}`}>
							<p className="font-semibold text-xl hover:underline underline-offset-4 mb-2">
								{category.name}
							</p>
						</Link>
						<ul>
							{category.items.map((item: any) => (
								<li key={item._id} className="text-primaryCream">
									{item.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default FullGearList;
