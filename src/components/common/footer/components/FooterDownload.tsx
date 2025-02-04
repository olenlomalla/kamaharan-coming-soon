import { Link } from "react-router-dom";
import { downloadApp } from "../data";

const FooterDownload = () => {
  return (
    <div className="flex items-center mb-[32px] h-[40px]">
      <h3 className="text-[#385C80]">Download Kamaharan app</h3>
      <div className="flex justify-between items-center gap-[48px] ml-[48px]">
        {downloadApp.map((icon) => (
          <Link to={"/"}>
            <img
              src={icon.imageUrl}
              alt={icon.imageLabel}
              key={icon.id}
              className="w-[135px] h-[40px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterDownload;
