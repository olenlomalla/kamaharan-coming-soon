import { FC } from "react";

interface IModalTitles {
  headTitle: string;
  description: string;
}

const ModalTitles: FC<IModalTitles> = ({ headTitle, description }) => {
  return (
    <>
      <h2 className="mb-[0px] text-center font-syne text-[24px] font-bold leading-[50px] tracking-[1px] sm:mb-[16px] sm:text-[36px] md:text-[60px]">
        {headTitle}
      </h2>
      <p className="text-center font-syne text-[14px] font-normal leading-[38px] tracking-[0.75px] sm:text-[18px] md:text-xl">
        {description}
      </p>
    </>
  );
};

export default ModalTitles;
