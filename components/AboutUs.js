import React from "react"
import styled from "styled-components"
import familyEat from "../assets/winterBanner.jpg"

const AboutCont = styled.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: start;
  height: 250px;
  gap: 1em;
  padding-right: 1em;
  background: ${({ theme }) => theme.bgColDark};
`

const ImgDiv = styled.div`
  background-image: url(${familyEat.src});
  background-position: center;
  background-size: cover;
  height: 100%;
  flex: 1;
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.2em 0;

  h2 {
    margin-bottom: 0;
  }
  p {
    font-size: 0.8rem;
  }
`

export default function About() {
  return (
    <AboutCont id="about-us">
      <ImgDiv />
      <TextDiv>
        <h2>About us</h2>
        <p>
          We go out of our way to make sure we have the best spices and herbs in
          the industry as such we have spices to keep you warm during winter and
          keep your cool during a hot summers day!
        </p>
      </TextDiv>
    </AboutCont>
  )
}
