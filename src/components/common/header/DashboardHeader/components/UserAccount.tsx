import { Link } from "react-router-dom";
import { userButton } from "../data";

const UserAccount = () => {
  return (
    <Link to={"/"}>
      <img
        src={userButton.imageUrl}
        alt={userButton.imageLabel}
        className="ml-[10px] w-[40px] h-[40px]"
      />
    </Link>
  );
};

export default UserAccount;
