import CustomSlider from "@/components/common/CustomSlider/CustomSlider";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import { images } from "./imagesDataSet";

const DealsPage = () => {
  return (
    <PagesContentLayout>
      <CustomSlider
        images={images}
        title={"Deals"}
        showActionButtons
        showSliderDescription
      />
    </PagesContentLayout>
  );
};

export default DealsPage;
