import { GearList } from "@/sanity.types";

const GearListDetailItem = ({ item }: { item: GearList }) => {
	return <p className="text-2xl gap-3">{item.name}</p>;
};

export default GearListDetailItem;
