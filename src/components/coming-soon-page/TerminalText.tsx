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
`;
const Term = styled.div`
 font-family: "Courier New”, Courier, monospace;
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
`;
const TextLine = styled.div`
  white-space: nowrap;
  overflow: visible; /* Changed from hidden to visible to ensure text isn’t cut off */
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
const CTAContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 20;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CTAButton = styled.button`
 font-family: "Inter”, sans-serif;
 padding: 18px 45px;
 font-size: 16px;
 font-weight: 800;
 cursor: pointer;
 color: #fff;
 text-transform: uppercase;
 letter-spacing: 1.5px;
 background: #FF4D4D;
 border: none;
 border-radius: 4px;
 box-shadow: 0 4px 0 #CC3D3D;
 transition: all 0.15s ease;
 @media (max-width: 768px) {
  padding: 15px 35px;
  font-size: 14px;
 }
 @media (max-width: 480px) {
  padding: 12px 25px;
  font-size: 12px;
 }
 &:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #CC3D3D;
 }
`;

interface TerminalTextProps {
  setModalOpen?: (isOpen: boolean) => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({ setModalOpen }) => {
  const [cursorPosition, setCursorPosition] = useState<number>(1); // 1 = first line, 2 = second line
  const [firstLineText, setFirstLineText] = useState<string>("");
  const [secondLineText, setSecondLineText] = useState<string>("");
  const [blinkCount, setBlinkCount] = useState<number>(0);
  const [animationStage, setAnimationStage] = useState<number>(0); // Control cursor visibility
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const runAnimation = () => {
      // Stage 0: Initial blinking (4 times)
      if (animationStage === 0) {
        if (blinkCount < 8) {
          // 4 full blinks (on-off cycles) = 8 states
          timer = setTimeout(() => {
            setBlinkCount((prevCount) => prevCount + 1);
          }, 500); // Slower blink rate (500ms per state)
        } else {
          setAnimationStage(1);
          setBlinkCount(0);
        }
      }
      // Stage 1: Type first line
      else if (animationStage === 1) {
        const text = "THIS CHANGES EVERYTHING!";
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
          // 4 full blinks
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
          setAnimationStage(4); // Final state - just keep blinking
        }
      }
    };
    runAnimation();
    return () => {
      clearTimeout(timer);
    };
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
          <CTAButton onClick={() => setModalOpen(true)}>
            REQUEST INVITE
          </CTAButton>
        </CTAContainer>
      )}
    </>
  );
};

export default TerminalText;
