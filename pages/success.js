import React, { useEffect } from "react"
import styled from "styled-components"
import bg from "../assets/successbg3.webp"
import { useRouter } from "next/router"
import Link from "next/link"

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

export default function Success() {
  const router = useRouter()
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <Main>
      <h1>Thank you</h1>
      <span>purchase succesful c:</span>
      <Link href={"/"}>back to home</Link>
    </Main>
  )
}
