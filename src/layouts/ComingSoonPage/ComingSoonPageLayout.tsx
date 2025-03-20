import React from "react";
import TerminalText from "@/components/coming-soon-page/TerminalText";

const ComingSoonPageLayout: React.FC = () => {
  const formUrl = "https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu";

  return (
    <div className="relative z-10 flex flex-col justify-end w-full min-h-[100svh]">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 w-full px-6 md:px-10 max-w-[1440px] mx-auto mb-8">
        {/* Terminal Text */}
        <div className="flex items-end overflow-hidden">
          <div className="w-[150%] scale-[0.65] origin-bottom-left">
            <TerminalText />
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-end gap-2">
          <span className="text-white text-sm">TO FIND OUT MORE</span>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
          >
            REQUEST INVITE
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-end items-end">
          <img
            src="/icons/logo-white.svg"
            alt="Kamaharan Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center w-full">
        {/* Portrait */}
        <div className="landscape:hidden flex flex-col items-center justify-between w-full h-[60vh] px-4 py-8">
          <div className="flex-1" />
          <div className="w-full flex items-end mb-8">
            <div className="w-[120%] scale-[0.6] origin-bottom-left">
              <TerminalText />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8">
            <span className="text-white text-sm">TO FIND OUT MORE</span>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              REQUEST INVITE
            </a>
          </div>

          <img
            src="/icons/logo-white.svg"
            alt="Kamaharan Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Landscape */}
        <div className="portrait:hidden flex items-center justify-between w-full px-6 py-4">
          <div className="w-1/3 overflow-hidden">
            <div className="w-[140%] scale-[0.5] origin-bottom-left">
              <TerminalText />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3">
            <span className="text-white text-sm">TO FIND OUT MORE</span>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              REQUEST INVITE
            </a>
          </div>

          <div className="flex justify-end w-1/3">
            <img
              src="/icons/logo-white.svg"
              alt="Kamaharan Logo"
              className="h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
