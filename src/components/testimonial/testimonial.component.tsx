import { FC } from "react";
import {
    TestimonialSection,
    VideoContainer,
    BackgroundVideo,
    TestimonialWrapper,
    TestimonialBackground,
    Story,
    StoryImage,
    StoryText,
    StoryHeading,
    StoryParagraph,
} from "./testimonial.style";

interface TestimonialData {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const testimonials: TestimonialData[] = [
  {
    imgSrc:
      "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/testimonial-01.jpg",
    heading: "The antidote to exhaustion isn’t rest. It’s nature.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium officiis magni architecto aspernatur odio et voluptatum perspiciatis qui necessitatibus vero aut, iste, ut impedit velit mollitia laudantium asperiores voluptates!",
  },
  {
    imgSrc:
      "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/testimonial-girls.jpg",
    heading: "In all things of nature there is something of the marvellous.",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium officiis magni architecto aspernatur odio et voluptatum perspiciatis qui necessitatibus vero aut, iste, ut impedit velit mollitia laudantium asperiores voluptates!",
  },
];

const Testimonial: FC = () => {
    return (
        <TestimonialSection id="testimonial-section">
          <VideoContainer>
            <BackgroundVideo autoPlay muted loop>
              <source
                src="https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Videos/testimonial-section-video.mp4"
                type="video/mp4"
              />
            </BackgroundVideo>
          </VideoContainer>
          <TestimonialWrapper>
            {testimonials.map((testimonial, index) => (
              <TestimonialBackground key={index}>
                <Story>
                  <StoryImage src={testimonial.imgSrc} alt={`Testimonial ${index + 1}`} />
                  <StoryText>
                    <StoryHeading>{testimonial.heading}</StoryHeading>
                    <StoryParagraph>{testimonial.paragraph}</StoryParagraph>
                  </StoryText>
                </Story>
              </TestimonialBackground>
            ))}
          </TestimonialWrapper>
        </TestimonialSection>
      );
    };
    
    export default Testimonial;
