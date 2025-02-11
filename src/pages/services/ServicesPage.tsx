import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import {
  dataSetImage_1,
  dataSetImage_2,
  discoverServicesImages,
} from "./dataSetImages";
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
      />
      <CustomSliderModified
        images={dataSetImage_2}
        title="Popular Items "
        showSliderDescription
      />
    </PagesContentLayout>
  );
};

export default ServicesPage;
