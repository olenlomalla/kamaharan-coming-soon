const ComingSoonPageLayout = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center px-4 min-h-screen">
      <div className="space-y-8 mx-auto w-full max-w-[600px] text-center">
        <h1 className="mx-auto max-w-[13ch] font-bold font-syne text-[#D8E9FA] text-[60px] text-center leading-[60px] animate-fadeIn">
          Exciting Surprises Ahead! Stay Tuned!
        </h1>

        <div className="mx-auto max-w-md animate-fadeIn">
          <div className="flex flex-col gap-2">
            <button className="bg-[#B8A888] px-8 py-3 rounded-lg w-full font-medium font-syne text-[#1A2B3C] text-[16px] text-center leading-[24px] transition-colors">
              Join Waitlist
            </button>

            <p className="pb-2 text-[#B8A888] text-sm">
              Join us in connecting London's communities with local businesses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
