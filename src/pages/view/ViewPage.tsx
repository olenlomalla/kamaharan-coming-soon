import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BackButton from "@/components/common/BackButton";
import AboutSection from "@/components/view/AboutSection";
import FeaturedSection from "@/components/view/FeaturedSection";
import { businesses } from "@/constants/pages/view/businesses";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const ViewPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBackClick = () => {
    navigate(`/home`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentBusiness = businesses.find((item) => item.id === Number(id));

  if (!currentBusiness) {
    return <div>Business not found</div>;
  }

  return (
    <PagesContentLayout>
      <div className="mx-auto w-full max-w-[1440px]">
        <BackButton size="32" onClick={handleBackClick} className="absolute" />
        <FeaturedSection currentBusiness={currentBusiness} />
        <AboutSection currentBusiness={currentBusiness} />
      </div>
    </PagesContentLayout>
  );
};

export default ViewPage;
