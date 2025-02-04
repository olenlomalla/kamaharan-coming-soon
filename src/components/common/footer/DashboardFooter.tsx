import FooterArticle from "./components/FooterArticle";
import FooterDisclaimer from "./components/FooterDisclaimer";
import FooterDownload from "./components/FooterDownload";
import FooterLogo from "./components/FooterLogo";
import { SocialMedia } from "./components/SocialMedia";
import { footerItems } from "./data";

const DashboardFooter = () => {
  return (
    <div className="flex justify-center items-center bg-[#D8E9FA] w-[1440px]">
      <div className="w-[830px]">
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
