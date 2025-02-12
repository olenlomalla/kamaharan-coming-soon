import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import {
  dataSetImage_1,
  dataSetImage_2,
  discoverServicesImages,
} from "../../mocks/pages/services/dataSetImages";
import { textElements } from "../../mocks/pages/services/descriptionSlides";
import DiscoverServices from "./components/DiscoverServices";

const ServicesPage = () => {
  return (
    <PagesContentLayout>
      <DiscoverServices
        images={discoverServicesImages}
        title="Discover services for every occasion"
      />
      <CustomSliderModified
        images={dataSetImage_1}
        title="Featured Services & Products"
        showSliderDescription
        descriptionArray={textElements}
      />
      <CustomSliderModified
        images={dataSetImage_2}
        title="Popular Items"
        showSliderDescription
        descriptionArray={textElements}
      />
    </PagesContentLayout>
  );
};

export default ServicesPage;
