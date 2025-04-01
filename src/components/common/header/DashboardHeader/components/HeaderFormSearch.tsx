import { inputSearchIcon } from "@/constants/common/DashboardHeader/data";

const HeaderFormSearch = () => {
  return (
    <form
      action=""
      className="flex h-[40px] w-full min-w-[100px] max-w-[377px] items-center justify-between rounded-[24px] bg-[#FFF1F0] px-[22px]"
    >
      <input
        type="text"
        placeholder="Look up whatever you want!"
        className="w-full min-w-3 bg-transparent font-body text-[11px] text-[#5B5A5E] outline-none placeholder:text-[#5B5A5E]"
      />
      <button type="submit" className={"min-w-4"}>
        {inputSearchIcon.map((icon) => {
          return (
            <img
              key={icon.imageId}
              src={icon.imageUrl}
              alt={icon.imageLabel}
              className="ml-2 size-[16px] min-w-3"
            />
          );
        })}
      </button>
    </form>
  );
};

export default HeaderFormSearch;
