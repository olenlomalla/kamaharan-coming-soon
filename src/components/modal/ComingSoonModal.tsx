import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface IComingSoonModal {
  onClose: () => void;
}

const ComingSoonModal: React.FC<IComingSoonModal> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Почати анімацію при завантаженні компонента
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`z-50 fixed inset-0 flex flex-col justify-between items-center bg-black bg-opacity-75 ${
        isVisible ? "animate-modalIn" : "opacity-0"
      }`}
    >
      {/* Верхня частина модалки з кнопками */}
      <div className="flex justify-between px-[45px] pt-[32px] w-full">
        <button
          onClick={onClose}
          className="flex justify-center items-center border-[#385C80] border-2 bg-transparent hover:bg-[#385C80] rounded-full w-[80px] h-[24px] text-sm hover:text-white transition-all"
        >
          Back
        </button>
        <button
          onClick={onClose}
          className="flex justify-center items-center border-[#385C80] border-2 bg-transparent hover:bg-[#385C80] rounded-full w-[80px] h-[24px] text-sm hover:text-white transition-all"
        >
          Skip
        </button>
      </div>

      {/* Нижня частина модалки з контентом */}
      <div className="flex flex-col flex-grow justify-center items-center">
        {/* Логотип */}
        <button type="button" onClick={onClose} className="mb-[48px]">
          <img
            src="/logo-modal.svg"
            alt="Kamaharan logo image"
            className="w-[215px] h-[46px]"
          />
        </button>

        {/* Заголовок */}
        <h2 className="mb-[16px] font-bold font-syne text-4xl text-center underline-from-font leading-[50px] tracking-[1px] decoration-none">
          Create Your Account
        </h2>

        {/* Опис */}
        <p className="font-normal font-syne text-center text-xl underline-from-font leading-[38px] tracking-[0.75px] decoration-none">
          Choose how you want to use Kamaharan
        </p>

        {/* Секція для акаунтів */}
        <div className="flex flex-col gap-[35px] mt-[48px]">
          {/* Особистий акаунт */}
          <Link
            to={"/"}
            onClick={onClose}
            className="flex border-[#F8F7F466] bg-white bg-opacity-20 backdrop-blur-[40px] p-8 border rounded-[24px] w-[522px] h-[153px]"
          >
            <div className="flex flex-col justify-start w-[48px]">
              <button className="flex justify-center items-center bg-[#F8F7F44D] border border-transparent rounded-[8px] w-[48px] h-[48px]">
                <img
                  src="/profile.svg"
                  alt="Create profile account image"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
            <div className="ml-[19px] w-[390px] h-[89px]">
              <h3 className="font-normal font-syne text-[#FCFCFC] text-[24px] leading-[38px] tracking-[0.75px]">
                Personal Account
              </h3>
              <p className="font-normal font-syne text-[#FCFCFC] text-[18px] leading-[24px] tracking-[0.75px]">
                Discover and connect with local businesses, write reviews, and
                save your favorites.
              </p>
            </div>
          </Link>

          {/* Бізнес акаунт */}
          <Link
            to={"/"}
            onClick={onClose}
            className="flex border-[#F8F7F466] bg-white bg-opacity-20 backdrop-blur-[40px] p-8 border rounded-[24px] w-[522px] h-[153px]"
          >
            <div className="flex flex-col justify-start w-[48px]">
              <button className="flex justify-center items-center bg-[#F8F7F44D] border border-transparent rounded-[8px] w-[48px] h-[48px]">
                <img
                  src="/business.svg"
                  alt="Create profile account image"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
            <div className="ml-[19px] w-[390px] h-[89px]">
              <h3 className="font-normal font-syne text-[#FCFCFC] text-[24px] leading-[38px] tracking-[0.75px]">
                Business Account
              </h3>
              <p className="font-normal font-syne text-[#FCFCFC] text-[18px] leading-[24px] tracking-[0.75px]">
                List your business, manage your profile, and connect with
                customers.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
