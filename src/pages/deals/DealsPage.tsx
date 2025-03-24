import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

import { images } from "../../constants/pages/deals/imagesDataSet";
import { textElements } from "../../constants/pages/deals/textElements";
import { buttonTitles } from "../../constants/pages/deals/titlesDataSet";

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
