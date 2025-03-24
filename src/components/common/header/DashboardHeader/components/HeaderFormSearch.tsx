import { inputSearchIcon } from "@/constants/common/DashboardHeader/data";

const HeaderFormSearch = () => {
  return (
    <form
      action=""
      className="flex h-[40px] w-[377px] items-center justify-between rounded-[24px] bg-[#FFF1F0] px-[22px]"
    >
      <input
        type="text"
        placeholder="Look up whatever you want!"
        className="w-full bg-transparent font-body text-[11px] text-[#5B5A5E] outline-none"
      />
      <button type="submit">
        {inputSearchIcon.map((icon) => {
          return (
            <img
              key={icon.imageId}
              src={icon.imageUrl}
              alt={icon.imageLabel}
              className="ml-[24px] h-[16px] w-[16px]"
            />
          );
        })}
      </button>
    </form>
  );
};

export default HeaderFormSearch;
