import { GearListPage } from "@/components";
import { getGearList } from "../utils";

export default async function GearList() {
	const gearList = await getGearList();
	return <GearListPage gearList={gearList} />;
}
