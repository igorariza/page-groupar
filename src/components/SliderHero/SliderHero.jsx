import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const bogliasco = "https://res.cloudinary.com/groupar/image/upload/v1603162372/groupar_sf9exe.png";
const countyClare = "https://res.cloudinary.com/groupar/image/upload/v1603162372/groupar_sf9exe.png";
const craterRock = "https://res.cloudinary.com/groupar/image/upload/v1603162372/groupar_sf9exe.png";
const giauPass = "https://res.cloudinary.com/groupar/image/upload/v1603162372/groupar_sf9exe.png";

const app = () => {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={nextSlide => console.log("onChange", nextSlide)}
      onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)"
      }}
      settings={{
        slidingDuration: 300,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 3000,
        height: "95vh"
      }}
    >
      <OverlayContainer>
        {/* <Wrapper>
          <Title>Slider</Title>
          <Subtitle>Slides' background attachment set to fixed</Subtitle>
        </Wrapper> */}
      </OverlayContainer>

      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: "fixed"
        }}
      />

      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: "fixed"
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default app;