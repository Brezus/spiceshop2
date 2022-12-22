import React from "react"
import styled from "styled-components"
import bg from "../assets/successbg3.webp"

const Main = styled.main`
  background-image: url(${bg.src});
  background-size: cover;
  // background-position: center bottom;
  color: black;
  min-height: 100vh;
  text-align: center;
  h1 {
    font-size: 6rem;
  }
`

export default function success() {
  return (
    <Main>
      <h1>Thank you</h1>
      <span>purchase succesful c:</span>
      <button>back to home</button>
    </Main>
  )
}
