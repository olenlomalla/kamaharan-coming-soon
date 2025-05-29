import React, { useEffect, useState } from "react";

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define the glitch animation
const glitch = keyframes`
  0% { 
    transform: translateX(0); 
  }
  20% { 
    transform: translateX(-2px); 
  }
  40% { 
    transform: translateX(2px); 
  }
  60% { 
    transform: translateX(-2px); 
  }
  80% { 
    transform: translateX(2px); 
  }
  100% { 
    transform: translateX(0); 
  }
`;

// Define the blink animation
const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const TerminalContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 100;
  margin-top: 0;
  position: static;
  overflow: visible !important;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 80%;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    width: 40%;
    margin-top: 0;
    margin-left: calc(5% + env(safe-area-inset-left, 0px));
    position: static;
  }

  /* Use CSS feature detection instead of JS for iOS */
  @supports (-webkit-touch-callout: none) {
    @media (max-width: 900px) and (orientation: landscape) {
      width: 55% !important;
      margin-left: calc(3% + env(safe-area-inset-left, 0px)) !important;
    }
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
  animation: ${glitch} 3s infinite alternate-reverse;
  filter: hue-rotate(-10deg) saturate(1.2);
  font-weight: bold;
  line-height: 1.3;
  text-align: left;
  max-width: 100%;
  position: static; /* Completely static positioning */
  z-index: 100;
  overflow: visible !important;
  height: auto;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 1.3;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: 0.5px;
  }

  @media (max-width: 900px) and (orientation: landscape) {
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0.5px;
  }

  @media (orientation: landscape) and (max-width: 900px) {
    font-size: 24px !important;
    line-height: 1.2 !important;
    letter-spacing: 0.5px !important;
  }

  /* Use CSS feature detection for iOS instead of JS body class */
  @supports (-webkit-touch-callout: none) {
    @media (max-width: 900px) and (orientation: landscape) {
      font-size: 24px !important;
      line-height: 1.2 !important;
      letter-spacing: 0.5px !important;
    }
  }

  /* Fallback landscape styles for all devices */
  @media (max-width: 900px) and (orientation: landscape) and (max-height: 500px) {
    font-size: 24px !important;
    line-height: 1.2 !important;
    letter-spacing: 0.5px !important;
  }
`;

const TextLine = styled.div`
  white-space: nowrap;
  overflow: visible !important;
  margin-bottom: 8px;
  position: static; /* Static positioning - no movement */
  z-index: 100;
  display: block;
  height: auto;
  opacity: 1;
`;

const Cursor = styled.span`
  display: inline-block;
  color: #a0ffa0;
  animation: ${blink} 0.3s infinite alternate;
`;

interface TerminalTextProps {}

const TerminalText: React.FC<TerminalTextProps> = () => {
  const [cursorPosition, setCursorPosition] = useState<number>(1);
  const [firstLineText, setFirstLineText] = useState<string>("");
  const [secondLineText, setSecondLineText] = useState<string>("");
  const [blinkCount, setBlinkCount] = useState<number>(0);
  const [animationStage, setAnimationStage] = useState<number>(0);

  // iOS Landscape Detection Hook - SSR Safe
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const handleResize = (): void => {
      if (isIOS && window.innerWidth > window.innerHeight) {
        document.body.classList.add("ios-landscape");
      } else {
        document.body.classList.remove("ios-landscape");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (typeof document !== "undefined") {
        document.body.classList.remove("ios-landscape");
      }
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runAnimation = (): void => {
      if (animationStage === 0) {
        if (blinkCount < 8) {
          timer = setTimeout(() => {
            setBlinkCount((prevCount: number) => prevCount + 1);
          }, 500);
        } else {
          setAnimationStage(1);
          setBlinkCount(0);
        }
      } else if (animationStage === 1) {
        const text: string = "THIS CHANGES EVERYTHING";
        if (firstLineText.length < text.length) {
          timer = setTimeout(() => {
            setFirstLineText(text.substring(0, firstLineText.length + 1));
          }, 75);
        } else {
          setCursorPosition(2);
          setAnimationStage(2);
        }
      } else if (animationStage === 2) {
        if (blinkCount < 8) {
          timer = setTimeout(() => {
            setBlinkCount((prevCount: number) => prevCount + 1);
          }, 500);
        } else {
          setAnimationStage(3);
          setBlinkCount(0);
        }
      } else if (animationStage === 3) {
        const text: string = "COMING SOON...";
        if (secondLineText.length < text.length) {
          timer = setTimeout(() => {
            setSecondLineText(text.substring(0, secondLineText.length + 1));
          }, 75);
        } else {
          setAnimationStage(4);
        }
      }
    };

    runAnimation();

    return () => {
      clearTimeout(timer);
    };
  }, [animationStage, blinkCount, firstLineText, secondLineText]);

  return (
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
  );
};

export default TerminalText;
