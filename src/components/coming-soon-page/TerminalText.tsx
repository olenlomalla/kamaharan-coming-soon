import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";

// --- iOS Landscape Detection Hook ---
const useIOSLandscapeClass = () => {
  useEffect(() => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const updateClass = () => {
      if (isIOS && window.innerWidth > window.innerHeight) {
        document.body.classList.add("ios-landscape");
      } else {
        document.body.classList.remove("ios-landscape");
      }
    };
    window.addEventListener("resize", updateClass);
    updateClass();
    return () => window.removeEventListener("resize", updateClass);
  }, []);
};

// --- Styled Components ---

const TerminalContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 20;
  margin-top: -10%;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 80%;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    width: 40%;
    margin-top: 0;
    margin-left: calc(5% + env(safe-area-inset-left));
    position: relative;
  }
`;

const Term = styled.div`
  font-family: "Courier New", Courier, monospace !important;
  font-size: 38px;
  color: rgba(220, 255, 220, 0.95);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow:
    0 0 1px rgba(180, 255, 220, 0.9),
    0 0 2px rgba(140, 255, 140, 0.8),
    0 0 4px rgba(0, 255, 68, 0.7),
    0 0 8px rgba(0, 255, 68, 0.5),
    0 0 12px rgba(0, 255, 68, 0.4);
  animation: glitch 3s infinite alternate-reverse;
  filter: hue-rotate(-10deg) saturate(1.2);
  font-weight: bold;
  line-height: 1.5;
  text-align: left;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 1.5;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0.5px;
  }

  /* --- iOS Landscape Fix: Force font size smaller --- */
  body.ios-landscape & {
    font-size: 24px !important;
    line-height: 1.2 !important;
    letter-spacing: 0.5px !important;
  }
`;

const TextLine = styled.div`
  white-space: nowrap;
  overflow: visible;
  margin-bottom: 10px;
`;

const Cursor = styled.span`
  display: inline-block;
  color: #a0ffa0;
  animation: blink 0.3s infinite alternate;
  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const CTAContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 20;

  @media (max-width: 900px) {
    display: none;
  }

  @media (min-width: 901px) {
    display: flex;
  }
`;

const CTAButton = styled.button`
  font-family: "Inter", sans-serif;
  padding: 18px 45px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: #ff4d4d;
  border: none;
  border-radius: 4px;
  box-shadow: 0 4px 0 #cc3d3d;
  transition: all 0.15s ease;

  @media (max-width: 768px) {
    padding: 15px 35px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px 25px;
    font-size: 12px;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    padding: 10px 20px;
    font-size: 12px;
  }

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #cc3d3d;
  }
`;

// --- Main Component ---

interface TerminalTextProps {
  setModalOpen?: (isOpen: boolean) => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({ setModalOpen }) => {
  // Add iOS landscape class to <body> when needed
  useIOSLandscapeClass();

  const [cursorPosition, setCursorPosition] = useState<number>(1);
  const [firstLineText, setFirstLineText] = useState<string>("");
  const [secondLineText, setSecondLineText] = useState<string>("");
  const [blinkCount, setBlinkCount] = useState<number>(0);
  const [animationStage, setAnimationStage] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const runAnimation = () => {
      if (animationStage === 0) {
        if (blinkCount < 8) {
          timer = setTimeout(() => setBlinkCount((c) => c + 1), 500);
        } else {
          setAnimationStage(1);
          setBlinkCount(0);
        }
      } else if (animationStage === 1) {
        const text = "THIS CHANGES EVERYTHING";
        if (firstLineText.length < text.length) {
          timer = setTimeout(
            () => setFirstLineText(text.substring(0, firstLineText.length + 1)),
            75,
          );
        } else {
          setCursorPosition(2);
          setAnimationStage(2);
        }
      } else if (animationStage === 2) {
        if (blinkCount < 8) {
          timer = setTimeout(() => setBlinkCount((c) => c + 1), 500);
        } else {
          setAnimationStage(3);
          setBlinkCount(0);
        }
      } else if (animationStage === 3) {
        const text = "COMING SOON...";
        if (secondLineText.length < text.length) {
          timer = setTimeout(
            () =>
              setSecondLineText(text.substring(0, secondLineText.length + 1)),
            75,
          );
        } else {
          setAnimationStage(4);
        }
      }
    };
    runAnimation();
    return () => clearTimeout(timer);
  }, [animationStage, blinkCount, firstLineText, secondLineText]);

  return (
    <>
      <TerminalContainer>
        <Term>
          <TextLine>
            {firstLineText}
            {cursorPosition === 1 && <Cursor>_</Cursor>}
          </TextLine>
          <TextLine>
            {secondLineText}
            {cursorPosition === 2 && <Cursor>_</Cursor>}
          </TextLine>
        </Term>
      </TerminalContainer>
      {setModalOpen && (
        <CTAContainer>
          <div className="font-mono text-lg text-white">TO FIND OUT MORE</div>
          <CTAButton onClick={() => setModalOpen(true)}>REQUEST</CTAButton>
        </CTAContainer>
      )}
    </>
  );
};

export default TerminalText;
