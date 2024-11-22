import { FC, useEffect, useRef, useState } from "react";
import {
  CarouselWrapper,
  VideoContainer,
  VideoWrapper,
  Overlay,
  VideoCaption,
  VideoTitle,
} from "./video-carousel.style";

const VideoCarousel: FC = () => {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  //List of video source
  const videos = [
    {
      src: "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/7027594_Sport_Men_3840x2160.mp4",
      title: "Push Your Limits",
      caption:
        "Strength doesn’t come from what you can do; it comes from overcoming the things you once thought you couldn’t.",
    },
    {
      src: "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/1114274_Weight_Dumbbell_3840x2160.mp4",
      title: "Lift to Rise",
      caption:
        "Every rep brings you closer to your best self. Make the effort count.",
    },
    {
      src: "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/7020531_Adult_Alone_3840x2160.mp4",
      title: "Focus and Grind",
      caption:
        "It’s not about being better than someone else; it’s about being better than you were yesterday.",
    },
    {
      src: "https://portfolio-nelson-lamounier.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/7027520_Sport_Training_3840x2160.mp4",
      title: "Run to Freedom",
      caption:
        "Sweat is your body crying out success. Chase the wind and find your power.",
    },
  ];

  videos.forEach(({ title, caption }) => {
    console.log("Title:", title);
    console.log("Caption:", caption);
  });

  const totalVideos = videos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Adjust duration as needed

    return () => clearInterval(interval);
  }, [videos.length]);

  // Handle transition end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    // Reset position for infinite loop
    if (currentIndex >= totalVideos) {
      setCurrentIndex(0); // Reset to the first video
    } else if (currentIndex < 0) {
      setCurrentIndex(totalVideos - 1); // Reset to the last video
    }
  };

  // Calculate translateX value for sliding effect
  const translateValue = -(currentIndex + 1) * 100;

  return (
    <CarouselWrapper>
      <Overlay />
      <VideoContainer
        ref={videoContainerRef}
        translateValue={translateValue}
        isTransitioning={isTransitioning}
        onTransitionEnd={handleTransitionEnd}
      >
        <VideoWrapper key="last-clone">
          <video src={videos[videos.length - 1].src} muted autoPlay loop />
        </VideoWrapper>
        {videos.map(({ src, title, caption }, index) => (
          <VideoWrapper key={index}>
            <video src={src} muted autoPlay loop />
            <div>
              <VideoTitle>{title}</VideoTitle>
              <VideoCaption>{caption}</VideoCaption>
            </div>
          </VideoWrapper>
        ))}
        <VideoWrapper key="first-clone">
          <video src={videos[0].src} muted autoPlay loop />
        </VideoWrapper>
      </VideoContainer>
    </CarouselWrapper>
  );
};

export default VideoCarousel;

{
  /* Clone last video for seamless looping */
}
{
  /* <VideoWrapper key="last-clone">
          <video src={videos[totalVideos - 1]} muted autoPlay loop />
        </VideoWrapper> */
}

{
  /* Main videos */
}
{
  /* {videos.map((src, index) => (
          <VideoWrapper key={index}>
            <video src={src} muted autoPlay loop />
          </VideoWrapper>
        ))} */
}

{
  /* Clone first video for seamless looping */
}
{
  /* <VideoWrapper key="first-clone">
          <video src={videos[0]} muted autoPlay loop />
        </VideoWrapper> */
}
