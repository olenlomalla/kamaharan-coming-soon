import ActionButtonUI from "@/components/ui/ActionButton";
import { dataSet_1, dataSet_2 } from "@/constants/pages/kforbusiness/dataSets";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const KForBusiness = () => {
  return (
    <PagesContentLayout>
      <div className="mx-4 my-8 flex flex-col items-center justify-center gap-6 md:my-[48px] md:gap-[24px]">
        <h1 className="text-center font-syne text-2xl font-bold leading-8 tracking-normal md:text-4xl md:leading-10">
          Kamaharan for Business
        </h1>
        <div className="max-w-[632px]">
          <p className="text-center font-syne text-sm leading-5 tracking-[0.75px] md:text-base md:leading-6">
            Kamaharan is for every type of authentic business, from home-based
            bakery artisans crafting delicious cupcakes and milk cakes to
            clothing merchants specialising in Thobes and Abaayas, Oud and Attar
            Connoisseurs, Influencers creating undeniable content. It's also the
            perfect platform for photographers capturing moments, freelance
            professionals offering unique skills, fitness trainers shaping
            healthier lifestyles, and content creators sharing their stories.
            Whether you're just starting out or running a thriving enterprise,
            Kamaharan is the number 1 platform for your business.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-[8px]">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-[8px]">
            {dataSet_1.map((item, index) => {
              return (
                <ActionButtonUI key={index} path={item.path} paddingX={25}>
                  {item.text}
                </ActionButtonUI>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-[8px]">
            {dataSet_2.map((item, index) => {
              return (
                <ActionButtonUI key={index} path={item.path} paddingX={25}>
                  {item.text}
                </ActionButtonUI>
              );
            })}
          </div>
        </div>
      </div>
    </PagesContentLayout>
  );
};

export default KForBusiness;
