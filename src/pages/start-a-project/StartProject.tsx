import PagesContentLayout from "@/layouts/PagesContentLayout/PagesContentLayout";
import { startProjectIcons } from "../../mocks/pages/start-project/imagesDataSet";

const bgImage = "/images/start-project-bg.png";

const StartProject = () => {
  return (
    <PagesContentLayout>
      <div
        className={`flex flex-col justify-center items-center gap-[24px] py-[48px] w-[1440px]`}
        style={{ background: `url(${bgImage})` }}
      >
        <h1 className="max-w-[632px] font-syne font-bold text-[#FCFCFC] text-4xl text-center leading-10 tracking-normal">
          Everything you need to start a project
        </h1>

        <div className="flex justify-center items-center gap-[48px]">
          {startProjectIcons.map((icon) => (
            <img key={icon.urlIcon} src={icon.urlIcon} alt={icon.labelIcon} />
          ))}
        </div>
      </div>
    </PagesContentLayout>
  );
};

export default StartProject;
