import { FC } from "react";

interface IModalTitles {
  headTitle: string;
  description: string;
}

const ModalTitles: FC<IModalTitles> = ({ headTitle, description }) => {
  return (
    <>
      <h2 className="mb-[0px] sm:mb-[16px] font-bold font-syne text-[24px] text-center sm:text-[36px] md:text-[60px] leading-[50px] tracking-[1px]">
        {headTitle}
      </h2>
      <p className="font-normal font-syne text-[14px] text-center sm:text-[18px] md:text-xl leading-[38px] tracking-[0.75px]">
        {description}
      </p>
    </>
  );
};

export default ModalTitles;
