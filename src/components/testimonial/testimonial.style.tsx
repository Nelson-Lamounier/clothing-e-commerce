import styled from "styled-components";

export const TestimonialSection = styled.div`
  padding: 10rem 0;
  position: relative;

`;

export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

export const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TestimonialBackground = styled.div`
  background-color: rgba(238, 238, 238, 0.7);
  padding: 5rem;
  margin: 5rem;
  width: 70%;
  transform: skewX(20deg);
`;

export const Story = styled.div`
  transform: skewX(-20deg);
  display: flex;
`;

export const StoryImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  object-fit: cover;
  margin: 5rem;
`;

export const StoryText = styled.div`
  letter-spacing: 0.2rem;
  margin-top: 5rem;
  font-weight: 300;
`;

export const StoryHeading = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: var(--dark-color);
  margin-top: 2rem;
  font-weight: 300;
`;

export const StoryParagraph = styled.p`
  font-size: 1.9rem;
  color: var(--grey-color);
  margin-top: 3rem;

  &::first-letter {
    margin-left: 1rem;
  }
`;