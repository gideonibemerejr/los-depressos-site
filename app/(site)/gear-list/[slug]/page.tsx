import { GearListDetailPage } from "@/components";
import {
	getFullGearList,
	getGearListCategory,
	getGearListDetail,
} from "../../utils";

const GearListDetail = async ({ params }: { params: { slug: string } }) => {
	const gearListDetail = await getGearListDetail(params.slug);
	const gearCategory = await getGearListCategory(params.slug);

	if (params.slug === "all") {
		const fullGearList = await getFullGearList();

		return <GearListDetailPage gearListDetail={fullGearList} />;
	}

	return (
		<GearListDetailPage
			gearCategory={gearCategory}
			gearListDetail={gearListDetail}
		/>
	);
};

export default GearListDetail;
