import React from "react";

import styled from "@emotion/styled";

// This container ensures full viewport coverage on iOS devices
const Container = styled.div`
  /* Full viewport width/height */
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  /* Handle iOS notches and safe areas */
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);

  /* Ensure content fills the screen */
  box-sizing: border-box;
  position: relative;

  /* Fix for iOS white edges in landscape mode */
  @media (orientation: landscape) {
    /* This negative margin technique helps overcome iOS safe area limitations */
    width: 100vw;
    margin-left: calc(env(safe-area-inset-left, 0px) * -1);
    margin-right: calc(env(safe-area-inset-right, 0px) * -1);
    padding-left: env(safe-area-inset-left, 0px);
    padding-right: env(safe-area-inset-right, 0px);
  }
`;

interface FullScreenContainerProps {
  children: React.ReactNode;
  className?: string;
}

const FullScreenContainer: React.FC<FullScreenContainerProps> = ({
  children,
  className,
}) => {
  return <Container className={className || ""}>{children}</Container>;
};

export default FullScreenContainer;
