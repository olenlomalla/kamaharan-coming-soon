import CustomSlider from "../../components/common/CustomSlider/CustomSlider";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import ImageSlider from "./components/ImageSlider";
import { titleSlidesHome } from "../../mocks/pages/home/titleSlides";

const HomePage = () => {
  const images = [
    "/images/home-page/slides/slideOne.png",
    "/images/home-page/slides/slideTwo.png",
    "/images/home-page/slides/slideThree.png",
    "/images/home-page/slides/slideFour.png",
    "/images/home-page/slides/slideOne.png",
    "/images/home-page/slides/slideTwo.png",
    "/images/home-page/slides/slideThree.png",
    "/images/home-page/slides/slideFour.png",
  ];

  return (
    <PagesContentLayout>
      <ImageSlider />
      <CustomSlider
        images={images}
        title={"Top Ten Picks"}
        showTitleArray
        titleArray={titleSlidesHome}
      />
      <CustomSlider
        images={images}
        title={"Local Business "}
        titleArray={titleSlidesHome}
        showTitleArray
      />
      <CustomSlider
        images={images}
        title={"What’s Happening in the Community"}
        titleArray={titleSlidesHome}
        showTitleArray
      />
    </PagesContentLayout>
  );
};

export default HomePage;
