import React from "react";
import TerminalText from "@/components/coming-soon-page/TerminalText";

const ComingSoonPageLayout: React.FC = () => {
  const formUrl = 'https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu';

  return (
    <div className="z-10 relative flex flex-col justify-end min-h-[100svh]">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 h-[72px] gap-6 w-full px-6 md:px-10 max-w-[1440px] mx-auto mb-8">
        <div className="w-full h-[72px] flex items-end overflow-hidden">
          <div className="w-[150%] scale-[0.65] origin-bottom-left -mb-1">
            <TerminalText />
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-2">
          <div className="text-white text-sm">TO FIND OUT MORE</div>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors no-underline inline-block"
          >
            REQUEST INVITE
          </a>
        </div>
        <div className="flex justify-end items-end">
          <img
            src="/icons/logo-white.svg"
            alt="Kamaharan Logo"
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center">
        {/* Portrait */}
        <div className="landscape:hidden min-h-[100svh] w-full flex flex-col items-center justify-between py-8 px-4">
          <div className="w-full flex-grow flex items-center justify-center">
            <div className="w-[120%] scale-[0.6] origin-center">
              <TerminalText />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="text-white text-sm">TO FIND OUT MORE</div>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors no-underline inline-block"
            >
              REQUEST INVITE
            </a>
          </div>
          <img
            src="/icons/logo-white.svg"
            alt="Kamaharan Logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Landscape */}
        <div className="portrait:hidden h-[72px] w-full flex flex-row items-center justify-between px-6 py-4">
          <div className="w-1/3 h-[72px] overflow-hidden">
            <div className="w-[140%] scale-[0.5] origin-bottom-left -mb-1">
              <TerminalText />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 w-1/3">
            <div className="text-white text-sm">TO FIND OUT MORE</div>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors no-underline inline-block"
            >
              REQUEST INVITE
            </a>
          </div>
          <div className="flex justify-end w-1/3">
            <img
              src="/icons/logo-white.svg"
              alt="Kamaharan Logo"
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
