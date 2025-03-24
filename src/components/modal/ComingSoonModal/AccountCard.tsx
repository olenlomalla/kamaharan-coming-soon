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
  const isExternalUrl = to.startsWith("http");
  const commonClassNames =
    "flex border-[#F8F7F466] bg-white bg-opacity-20 backdrop-blur-[40px] p-4 sm:p-8 border rounded-[24px] max-w-[522px] max-h-[200px]";

  const CardContent = () => (
    <>
      <div className="flex w-[48px] flex-col justify-start">
        <button className="flex h-[36px] w-[36px] items-center justify-center rounded-[8px] border border-transparent bg-[#F8F7F44D] sm:h-[48px] sm:w-[48px]">
          <img
            src={icon}
            alt={iconAlt || title}
            className="h-[18px] w-[18px] sm:h-[24px] sm:w-[24px]"
          />
        </button>
      </div>
      <div className="ml-[19px] max-h-[140px] max-w-[390px]">
        <h3 className="font-syne text-[16px] font-normal leading-[38px] tracking-[0.75px] text-[#FCFCFC] sm:text-[24px]">
          {title}
        </h3>
        <p className="font-syne text-[12px] font-normal leading-[24px] tracking-[0.75px] text-[#FCFCFC] sm:text-[18px]">
          {description}
        </p>
      </div>
    </>
  );

  return isExternalUrl ? (
    <a
      href={to}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={commonClassNames}
    >
      <CardContent />
    </a>
  ) : (
    <Link to={to} onClick={onClick} className={commonClassNames}>
      <CardContent />
    </Link>
  );
};

export default AccountCard;
