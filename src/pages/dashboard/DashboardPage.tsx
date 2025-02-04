import DashboardFooter from "@/components/common/footer/DashboardFooter";
import DashboardHeader from "@/components/common/header/DashboardHeader/DashboardHeader";

const DashboardPage = () => {
  return (
    <div className="w-[1440px]">
      <DashboardHeader />
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <DashboardFooter />
    </div>
  );
};

export default DashboardPage;
