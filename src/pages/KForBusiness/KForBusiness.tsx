import ActionButtonUI from "@/components/ui/ActionButton";
import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import { dataSet_1, dataSet_2 } from "@/mocks/pages/kforbusiness/dataSets";

const KForBusiness = () => {
  return (
    <PagesContentLayout>
      <div className="flex flex-col justify-center items-center gap-[24px] my-[48px]">
        <h1 className="font-syne font-bold text-3xl leading-10 tracking-normal">
          Kamaharan for Business
        </h1>
        <div className="max-w-[632px]">
          <p className="font-syne font-normal text-base text-center leading-6 tracking-[0.75px]">
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
        <div className="flex flex-col justify-center items-center gap-[8px]">
          <div className="flex justify-center items-center gap-[8px]">
            {dataSet_1.map((item, index) => {
              return (
                <ActionButtonUI key={index} path={item.path} paddingX={25}>
                  {item.text}
                </ActionButtonUI>
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-[8px]">
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
