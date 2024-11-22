import styled, { css } from "styled-components";

// Wrapper for the entire carousel
export const CarouselWrapper = styled.div`
  height: 50vh;
  overflow: hidden;
  width: 100%;
  position: relative;
  backgound-color: red;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`;

// Container for videos with dynamic animation
// Corrected VideoContainer
export const VideoContainer = styled.div<{
  translateValue: number;
  isTransitioning: boolean;
}>`
  display: flex;
  transition: ${({ isTransitioning }) =>
    isTransitioning ? "transform 1s ease" : "none"};
  transform: translateX(${({ translateValue }) => translateValue}%);
  box-shadow: rgb(38, 57, 77) 0px 20rem 30rem -10px;
`;

// Wrapper for individual videos
export const VideoWrapper = styled.div<{
  alignment?: "center" | "left" | "right";
  overlay?: boolean;
}>`
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) => alignment || "center"};
  position: relative;
  justify-content: center;

  video {
    width: 100%;
    height: auto;
    z-index: 1;

    opacity: 0.65;
  }
`;

export const VideoTitle = styled.h2`
  position: absolute;
  top: 10%;
  left: 30%;
  color: #fff;
  font-size: 10rem;
  z-index: 5; /* Above the Overlay */
  letter-spacing: 0.2rem;
`;

export const VideoCaption = styled.p`
  position: absolute;
  top: 25%;
  left: 30%;
  color: #fff;
  font-size: 2.5rem;
  z-index: 5; /* Above the Overlay */
  max-width: 50%;
  letter-spacing: 0.2rem;
  font-weight: 300;
  text-shadow: 1px 1px 1px #000;
`;
