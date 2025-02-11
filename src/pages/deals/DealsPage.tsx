import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import { images } from "./imagesDataSet";
import { buttonTitles } from "./titlesDataSet";
import { textElements } from "./textElements";

const DealsPage = () => {
  return (
    <PagesContentLayout>
      <CustomSliderModified
        images={images}
        title="Deals"
        showActionButtons={true}
        showSliderDescription={true}
        buttonTitlesArray={buttonTitles}
        descriptionArray={textElements}
      />
    </PagesContentLayout>
  );
};

export default DealsPage;
