import Link from "next/link";
import Button from "../ui/Button";
import { ReactNode } from "react";

const BylineLink = ({
	text,
	description,
	link,
	icon,
}: {
	text: string | undefined;
	description: string;
	link: string;
	icon: ReactNode;
}) => {
	return (
		<div
			key={text}
			className="flex flex-col items-center justify-center text-center"
		>
			<div className="w-16 h-16 text-primaryCream mb-4">{icon}</div>
			<p className="text-normal text-primaryCream mb-6">{description}</p>
			<Link href={link}>
				<Button className="" variant="cream">
					{text}
				</Button>
			</Link>
		</div>
	);
};

export default BylineLink;
