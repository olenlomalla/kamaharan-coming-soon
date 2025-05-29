import React, { useEffect, useState } from "react";

import styled from "@emotion/styled";

const TerminalContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 20;
  margin-top: -10%; /* Move text up by 10% on desktop */

  @media (max-width: 768px) {
    margin-top: 0; /* Reset for mobile views */
    width: 80%; /* Increase width on mobile for better text visibility */
  }

  /* Add landscape mode media query */
  @media (max-width: 900px) and (orientation: landscape) {
    width: 40%; /* Take up left third of screen in landscape */
    margin-top: 0;
    margin-left: calc(
      5% + env(safe-area-inset-left)
    ); /* Account for iOS safe area */
    position: relative;
  }

  /* iOS-specific fixes - wider container */
  body.ios-landscape & {
    width: 55% !important;
    margin-left: calc(3% + env(safe-area-inset-left)) !important;
  }
`;

const Term = styled.div`
  font-family: "Courier New", Courier, monospace !important;
  font-size: 38px; /* Increased from 28px to 38px for desktop */
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
  line-height: 1.5; /* Increased for better readability */
  text-align: left;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 40px; /* Maintained at 40px for mobile */
    line-height: 1.5;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 40px; /* Maintained at 40px for smaller mobile */
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  /* Landscape mode styling for Android */
  @media (max-width: 900px) and (orientation: landscape) {
    font-size: 24px; /* Reduced font size for landscape */
    line-height: 1.2;
    letter-spacing: 0.5px;
  }

  /* Alternative landscape targeting that works better on iOS */
  @media (orientation: landscape) and (max-width: 900px) {
    font-size: 24px !important;
    line-height: 1.2 !important;
    letter-spacing: 0.5px !important;
  }

  /* iOS-specific font size - SAME as Android to match exactly */
  body.ios-landscape & {
    font-size: 24px !important;
    line-height: 1.2 !important;
    letter-spacing: 0.5px !important;
  }
`;

const TextLine = styled.div`
  white-space: nowrap;
  overflow: visible !important; /* Ensure text isn't cut off */
  margin-bottom: 10px; /* Add space between lines */
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

interface TerminalTextProps {}

const TerminalText: React.FC<TerminalTextProps> = () => {
  const [cursorPosition, setCursorPosition] = useState<number>(1);
  const [firstLineText, setFirstLineText] = useState<string>("");
  const [secondLineText, setSecondLineText] = useState<string>("");
  const [blinkCount, setBlinkCount] = useState<number>(0);
  const [animationStage, setAnimationStage] = useState<number>(0);

  // iOS Landscape Detection Hook - SSR Safe
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const handleResize = () => {
      if (isIOS && window.innerWidth > window.innerHeight) {
        document.body.classList.add("ios-landscape");
      } else {
        document.body.classList.remove("ios-landscape");
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Run immediately
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      // Clean up class on unmount
      if (typeof document !== "undefined") {
        document.body.classList.remove("ios-landscape");
      }
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const runAnimation = () => {
      // Stage 0: Initial blinking (4 times)
      if (animationStage === 0) {
        if (blinkCount < 8) {
          timer = setTimeout(() => {
            setBlinkCount((prevCount) => prevCount + 1);
          }, 500);
        } else {
          setAnimationStage(1);
          setBlinkCount(0);
        }
      }
      // Stage 1: Type first line
      else if (animationStage === 1) {
        const text = "THIS CHANGES EVERYTHING";
        if (firstLineText.length < text.length) {
          timer = setTimeout(() => {
            setFirstLineText(text.substring(0, firstLineText.length + 1));
          }, 75);
        } else {
          setCursorPosition(2);
          setAnimationStage(2);
        }
      }
      // Stage 2: Blinking before second line (4 times)
      else if (animationStage === 2) {
        if (blinkCount < 8) {
          timer = setTimeout(() => {
            setBlinkCount((prevCount) => prevCount + 1);
          }, 500);
        } else {
          setAnimationStage(3);
          setBlinkCount(0);
        }
      }
      // Stage 3: Type second line
      else if (animationStage === 3) {
        const text = "COMING SOON...";
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
