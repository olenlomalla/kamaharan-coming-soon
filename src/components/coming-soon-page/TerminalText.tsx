import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const TerminalContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 20;
`;

const Term = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 42px;
  white-space: pre-wrap;
  color: rgba(220,255,220,.95);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 1px rgba(180,255,220,.9),
               0 0 2px rgba(140,255,140,.8),
               0 0 4px rgba(0,255,68,.7),
               0 0 8px rgba(0,255,68,.5),
               0 0 12px rgba(0,255,68,.4);
  animation: glitch 3s infinite alternate-reverse;
  filter: hue-rotate(-10deg) saturate(1.2);
  font-weight: bold;
  line-height: 1.5;
  text-align: left;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 1.4;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.3;
    letter-spacing: 1px;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  color: #a0ffa0;
  animation: blink .3s infinite alternate;
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
  font-family: 'Inter', sans-serif;
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
  
  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #cc3d3d;
  }
`;

interface TerminalTextProps {
  setModalOpen?: (isOpen: boolean) => void;
}

const TerminalText: React.FC<TerminalTextProps> = ({ setModalOpen }) => {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typeText = async (element: HTMLSpanElement, text: string) => {
      for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        const span = document.createElement('span');
        span.textContent = text[i];
        span.setAttribute('data-text', text[i]);
        element.appendChild(span);
      }
    };

    const startSequence = async () => {
      if (line1Ref.current && line2Ref.current) {
        await typeText(line1Ref.current, "THIS CHANGES EVERYTHING...");
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeText(line2Ref.current, "COMING SOON");
      }
    };

    startSequence();
  }, []);

  return (
    <>
      <TerminalContainer>
        <Term>
          <span ref={line1Ref}></span>
          <Cursor>_</Cursor>
          <br />
          <span ref={line2Ref}></span>
          <Cursor>_</Cursor>
        </Term>
      </TerminalContainer>
      
      {setModalOpen && (
        <CTAContainer>
          <div className="text-white font-mono text-lg">TO FIND OUT MORE</div>
          <CTAButton onClick={() => setModalOpen(true)}>
            REQUEST INVITE
          </CTAButton>
        </CTAContainer>
      )}
    </>
  );
};

export default TerminalText; 