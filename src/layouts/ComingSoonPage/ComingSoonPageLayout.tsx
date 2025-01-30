const ComingSoonPageLayout = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-[600px] mx-auto text-center space-y-8">
        <h1 className="text-4xl leading-10 max-w-[13ch] mx-auto font-bold font-syne text-[#D8E9FA] animate-fadeIn">
          Exciting Surprises Ahead! Stay Tuned!
        </h1>

        <div className="max-w-md mx-auto animate-fadeIn">
          <div className="flex flex-col gap-9">
            <button className="h-12 px-8 rounded-lg font-medium bg-[#B8A888] text-[#1A2B3C] transition-colors w-full">
              Join Waitlist
            </button>

            <p className="text-sm text-[#B8A888]">
              Join us in connecting London's communities with local businesses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
