import React from "react"
import { urlFor } from "./client"
import { nanoid } from "nanoid"
import { Slide } from "pure-react-carousel"
import {
  ImgCont,
  StyledCarouselProv,
  StyledSlider,
  StyledDotGroup,
} from "../styles/spiceStyles"

export default function Display({ data: { image, selectedSpice } }) {
  const slideImgs = image.map((img, i) => {
    return (
      <Slide key={nanoid()} index={i}>
        <ImgCont>
          <img
            src={urlFor(img)}
            alt={selectedSpice.name}
            title={selectedSpice.name}
          />
        </ImgCont>
      </Slide>
    )
  })
  return (
    <StyledCarouselProv
      infinite={true}
      naturalSlideWidth={80}
      isPlaying={true}
      orientation={"vertical"}
      naturalSlideHeight={100}
      totalSlides={image.length}
    >
      <StyledSlider>{slideImgs}</StyledSlider>
      <StyledDotGroup showAsSelectedForCurrentSlideOnly={true} />
    </StyledCarouselProv>
  )
}
