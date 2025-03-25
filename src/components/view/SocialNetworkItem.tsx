import { Link } from "react-router-dom";

import { SocialNetworkItemProps } from "@/types/view";

const SocialNetworkItem = ({ image, link }: SocialNetworkItemProps) => {
  return (
    <Link
      target="_blank"
      className="rounded-full border-2 border-[#F54D33] p-2"
      to={link}
    >
      {image}
    </Link>
  );
};

export default SocialNetworkItem;
