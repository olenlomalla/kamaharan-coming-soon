import React from "react";

import TerminalText from "@/components/coming-soon-page/TerminalText";

const ComingSoonPageLayout: React.FC = () => {
  const formUrl = "https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu";

  return (
    <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-end">
      {/* Desktop Layout */}
      <div className="mx-auto mb-8 hidden w-full max-w-[1440px] grid-cols-3 gap-6 px-6 md:grid md:px-10">
        {/* Terminal Text */}
        <div className="flex items-end overflow-hidden">
          <div className="w-[150%] origin-bottom-left scale-[0.65]">
            <TerminalText />
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-end gap-2">
          <span className="text-sm text-white">TO FIND OUT MORE</span>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-red-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            REQUEST INVITE
          </a>
        </div>

        {/* Logo */}
        <div className="flex items-end justify-end">
          <img
            src="/icons/logo-white.svg"
            alt="Kamaharan Logo"
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex w-full flex-col items-center md:hidden">
        {/* Portrait */}
        <div className="flex h-[60vh] w-full flex-col items-center justify-between px-4 py-8 landscape:hidden">
          <div className="flex-1" />
          <div className="mb-8 flex w-full items-end">
            <div className="w-[120%] origin-bottom-left scale-[0.6]">
              <TerminalText />
            </div>
          </div>

          <div className="mb-8 flex flex-col items-center gap-4">
            <span className="text-sm text-white">TO FIND OUT MORE</span>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-red-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
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
        <div className="flex w-full items-center justify-between px-6 py-4 portrait:hidden">
          <div className="w-1/3 overflow-hidden">
            <div className="w-[140%] origin-bottom-left scale-[0.5]">
              <TerminalText />
            </div>
          </div>

          <div className="flex w-1/3 flex-col items-center gap-2">
            <span className="text-sm text-white">TO FIND OUT MORE</span>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-red-600 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              REQUEST INVITE
            </a>
          </div>

          <div className="flex w-1/3 justify-end">
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
