import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import { images } from "../../mocks/pages/deals/imagesDataSet";
import { buttonTitles } from "../../mocks/pages/deals/titlesDataSet";
import { textElements } from "../../mocks/pages/deals/textElements";

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
