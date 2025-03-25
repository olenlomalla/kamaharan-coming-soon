import { useNavigate } from "react-router-dom";

import CustomSliderModified from "@/components/common/CustomSliderModified/CustomSliderModified";
import { images } from "@/constants/pages/deals/imagesDataSet";
import { textElements } from "@/constants/pages/deals/textElements";
import { buttonTitles } from "@/constants/pages/deals/titlesDataSet";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const DealsPage = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/business/${id}`);
  };

  return (
    <PagesContentLayout>
      <CustomSliderModified
        images={images}
        title="Deals"
        showActionButtons={true}
        showSliderDescription={true}
        buttonTitlesArray={buttonTitles}
        descriptionArray={textElements}
        onClick={handleClick}
      />
    </PagesContentLayout>
  );
};

export default DealsPage;
