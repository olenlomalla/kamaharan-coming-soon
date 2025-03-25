import { FC } from "react";

import AccountCard from "./AccountCard";

interface AccountCardsProps {
  onClose: () => void;
}

const AccountCards: FC<AccountCardsProps> = ({ onClose }) => {
  return (
    <div className="mx-[20px] mt-[16px] flex flex-col gap-[35px] sm:mt-[12px] md:mx-[48px]">
      <AccountCard
        to="https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu"
        onClick={onClose}
        icon="/profile.svg"
        title="Personal Account"
        description="Discover and connect with local businesses, write reviews, and save your favorites."
        iconAlt="Create profile account image"
      />
      <AccountCard
        to="https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu"
        onClick={onClose}
        icon="/business.svg"
        title="Business Account"
        description="List your business, manage your profile, and connect with customers."
        iconAlt="Create profile account image"
      />
    </div>
  );
};

export default AccountCards;
