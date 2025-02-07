import { FC } from "react";
import { Link } from "react-router-dom";

interface AccountCardProps {
  to: string;
  onClick: () => void;
  icon: string;
  title: string;
  description: string;
  iconAlt?: string;
}

const AccountCard: FC<AccountCardProps> = ({
  to,
  onClick,
  icon,
  title,
  description,
  iconAlt,
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex border-[#F8F7F466] bg-white bg-opacity-20 backdrop-blur-[40px] p-4 sm:p-8 border rounded-[24px] max-w-[522px] max-h-[200px]"
    >
      <div className="flex flex-col justify-start w-[48px]">
        <button className="flex justify-center items-center bg-[#F8F7F44D] border border-transparent rounded-[8px] w-[36px] sm:w-[48px] h-[36px] sm:h-[48px]">
          <img
            src={icon}
            alt={iconAlt || title}
            className="w-[18px] sm:w-[24px] h-[18px] sm:h-[24px]"
          />
        </button>
      </div>
      <div className="ml-[19px] max-w-[390px] max-h-[140px]">
        <h3 className="font-normal font-syne text-[#FCFCFC] text-[16px] sm:text-[24px] leading-[38px] tracking-[0.75px]">
          {title}
        </h3>
        <p className="font-normal font-syne text-[#FCFCFC] text-[12px] sm:text-[18px] leading-[24px] tracking-[0.75px]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default AccountCard;
