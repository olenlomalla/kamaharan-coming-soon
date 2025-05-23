import { footerItems } from "@/constants/common/DashboardFooter/data";

import FooterArticle from "./components/FooterArticle";
import FooterDisclaimer from "./components/FooterDisclaimer";
import FooterDownload from "./components/FooterDownload";
import FooterLogo from "./components/FooterLogo";
import { SocialMedia } from "./components/SocialMedia";

const DashboardFooter = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#FFF1F0] px-6">
      <div className="mx-auto max-w-[830px]">
        <FooterLogo />
        <div className="flex flex-wrap gap-[24px]">
          {footerItems.map((item) => (
            <FooterArticle
              key={item.id}
              title={item.label}
              items={item.items}
            />
          ))}
        </div>
        <SocialMedia />
        <FooterDownload />
        <FooterDisclaimer />
      </div>
    </div>
  );
};

export default DashboardFooter;
