import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const TerminalContainer = styled.div`
  position: fixed;
  bottom: 140px;
  left: 40px;
  width: auto;
  margin: 0;
  padding: 0;
  z-index: 20;

  @media (max-width: 768px) {
    bottom: 160px;
    left: 20px;
  }

  @media (max-width: 480px) {
    bottom: 180px;
    left: 15px;
  }
`;

const Term = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 42px;
  white-space: pre;
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
  line-height: 2.1;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  color: #a0ffa0;
  animation: blink .3s infinite alternate;
`;

const CTAContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 20;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  margin-left: 40px;
  
  @media (max-width: 768px) {
    right: 20px;
    bottom: 60px;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }

  @media (max-width: 480px) {
    right: 15px;
    bottom: 40px;
  }
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
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

const TerminalText: React.FC = () => {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
      if (line1Ref.current && line2Ref.current && ctaRef.current) {
        await typeText(line1Ref.current, "THIS CHANGES EVERYTHING...");
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeText(line2Ref.current, "COMING SOON");
        ctaRef.current.classList.add('visible');
      }
    };

    startSequence();
  }, []);

  const openCtaForm = () => {
    window.open('https://share.hsforms.com/1trrAEFMxSNO-kESKt3ZQYwtchxu', '_blank');
  };

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
      
      <CTAContainer ref={ctaRef}>
        <div className="text-white font-mono text-lg">TO FIND OUT MORE</div>
        <CTAButton onClick={openCtaForm}>
          Request Invite
        </CTAButton>
      </CTAContainer>
    </>
  );
};

export default TerminalText; 