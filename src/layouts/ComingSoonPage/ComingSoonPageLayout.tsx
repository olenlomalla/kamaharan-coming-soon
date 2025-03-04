import React from "react";
import TerminalText from "@/components/coming-soon-page/TerminalText";

interface ComingSoonPageLayoutProps {
  setModalOpen: (isOpen: boolean) => void;
}

const ComingSoonPageLayout: React.FC<ComingSoonPageLayoutProps> = ({ setModalOpen }) => {
  const formUrl = 'https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu';

  return (
    <div className="z-10 relative flex flex-col justify-end min-h-[100svh]">
      {/* Desktop Layout */}
      <div className="hidden sm:grid grid-cols-3 gap-6 w-full pb-8 px-10">
        <div className="w-full flex items-end">
          <TerminalText />
        </div>
        <div className="flex flex-col items-center justify-end gap-3">
          <div className="text-white font-mono text-xl">TO FIND OUT MORE</div>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded text-base font-medium transition-colors no-underline inline-block"
          >
            REQUEST INVITE
          </a>
        </div>
        <div className="flex justify-end items-end">
          <img
            src="/icons/logo-white.svg"
            alt="Kamaharan Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center pb-8 px-4">
        <div className="w-full pt-20">
          <TerminalText />
        </div>
        <div className="flex flex-col items-center gap-8 mt-24 mb-16">
          <div className="text-white font-mono text-lg mb-2">TO FIND OUT MORE</div>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded text-base font-medium transition-colors no-underline inline-block"
          >
            REQUEST INVITE
          </a>
        </div>
        <img
          src="/icons/logo-white.svg"
          alt="Kamaharan Logo"
          className="h-10 w-auto object-contain mb-4"
        />
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
