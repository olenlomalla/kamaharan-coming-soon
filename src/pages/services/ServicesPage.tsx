import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import { images } from "@/constants/pages/services/dataSetImages";
import { textElements } from "@/constants/pages/services/descriptionSlides";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

import DiscoverServices from "./components/DiscoverServices";

const ServicesPage = () => {
  return (
    <PagesContentLayout>
      <DiscoverServices
        images={images}
        title="Discover services for every occasion"
      />
      <CustomSliderModified
        images={images}
        title="Featured Services & Products"
        showSliderDescription
        descriptionArray={textElements}
      />
      <CustomSliderModified
        images={images}
        title="Popular Items"
        showSliderDescription
        descriptionArray={textElements}
      />
    </PagesContentLayout>
  );
};

export default ServicesPage;
