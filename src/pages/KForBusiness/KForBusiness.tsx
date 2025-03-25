import ActionButtonUI from "@/components/ui/ActionButton";
import { dataSet_1, dataSet_2 } from "@/constants/pages/kforbusiness/dataSets";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";

const KForBusiness = () => {
  return (
    <PagesContentLayout>
      <div className="my-[48px] flex flex-col items-center justify-center gap-[24px]">
        <h1 className="font-syne text-4xl font-bold leading-10 tracking-normal">
          Kamaharan for Business
        </h1>
        <div className="max-w-[632px]">
          <p className="text-center font-syne text-base font-normal leading-6 tracking-[0.75px]">
            Kamaharan is for every type of authentic business, from home-based
            bakery artisans crafting delicious cupcakes and milk cakes to
            clothing merchants specialising in Thobes and Abaayas, Oud and Attar
            Connoisseurs, Influencers creating undeniable content. It’s also the
            perfect platform for photographers capturing moments, freelance
            professionals offering unique skills, fitness trainers shaping
            healthier lifestyles, and content creators sharing their stories.
            Whether you're just starting out or running a thriving enterprise,
            Kamaharan is the number 1 platform for your business.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <div className="flex items-center justify-center gap-[8px]">
            {dataSet_1.map((item, index) => {
              return (
                <ActionButtonUI key={index} path={item.path} paddingX={25}>
                  {item.text}
                </ActionButtonUI>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-[8px]">
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
