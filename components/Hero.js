import React from "react"
import styled from "styled-components"
import chef from "../assets/chef.jpg"
import spice from "../assets/spice-jar1.jpg"

const HeroDiv = styled.div`
  background-image: url(${chef.src});
  background-color: rgba(20, 20, 20, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center bottom;
  min-height: 100vh;
  width: 100%;
  font-family: ${({ theme }) => theme.ffM};
  padding-bottom: 2em;
`

const HeroText = styled.div`
  width: ${({ theme }) => theme.width};
  margin-inline: auto;
  position: relative;
  padding-top: 15rem;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 5rem;
    margin-bottom: 0;
  }

  p {
    max-width: 400px;
    font-size: 1.2rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
`

const IconsCont = styled.div`
  display: flex;
  flex-direction: column;
`

const SpiceJar = styled.div`
  background-image: url(${spice.src});
  background-position: center;
  background-size: contain;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 10%;
`

const Button = styled.button`
  padding: 0.2em 1em;
  background: none;
  border: 1px solid yellow;
  border-radius: ${({ theme }) => theme.bRadius};
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  font-size: 1.5rem;
  display: inline-block;
  align-self: start;
  cursor: pointer;
`

export default function Hero() {
  const styles = { display: "flex", flexDirection: "column", gap: "1em" }
  return (
    <HeroDiv>
      <HeroText>
        <div style={styles}>
          <h1>Spice It Up</h1>
          <p>
            Spice improves the natural flavor of cuisines and is used for
            medicinal purposes
          </p>
          <Button>shop now</Button>
        </div>
      </HeroText>
    </HeroDiv>
  )
}
