import { inputSearchIcon } from "../../../../../mocks/common/DashboardHeader/data";
const HeaderFormSearch = () => {
  return (
    <form
      action=""
      className="flex justify-between items-center bg-[#D8E9FA] px-[22px] rounded-[24px] w-[520px] h-[40px]"
    >
      <input
        type="text"
        placeholder="Look up whatever you want!"
        className="bg-transparent outline-none w-[100%] text-[#5B5A5E] text-[11px]"
      />
      <button type="submit">
        {inputSearchIcon.map((icon) => {
          return (
            <img
              key={icon.imageId}
              src={icon.imageUrl}
              alt={icon.imageLabel}
              className="ml-[24px] w-[16px] h-[16px]"
            />
          );
        })}
      </button>
    </form>
  );
};

export default HeaderFormSearch;
