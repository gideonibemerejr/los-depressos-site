import { GearListDetailPage } from "@/components";
import {
  getFullGearList,
  getGearList,
  getGearListCategory,
  getGearListDetail,
} from "../../utils";
import FullGearList from "@/components/GearListDetail/FullGearList";

const GearListDetail = async ({ params }: { params: { slug: string } }) => {
  const gearListDetail = await getGearListDetail(params.slug);
  const gearCategory = await getGearListCategory(params.slug);

  if (params.slug === "all") {
    const gearListCategories = await getGearList();
    const fullGearList = await getFullGearList();

    const categories = gearListCategories.map((category) => {
      const items = fullGearList.filter(
        // @ts-ignore
        (item) => item?.categorySlug === category.slug.current,
      );

      return {
        ...category,
        items,
      };
    });

    return <FullGearList categories={categories} />;
  }

  return (
    <GearListDetailPage
      gearCategory={gearCategory}
      gearListDetail={gearListDetail}
    />
  );
};

export default GearListDetail;
