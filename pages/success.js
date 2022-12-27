import React, { useEffect } from "react"
import styled from "styled-components"
import bg from "../assets/successbg3.webp"
import { useRouter } from "next/router"
import Link from "next/link"
import { useAppContext } from "../context/ShoppingCartContext"
import { Button } from "../styles/spiceStyles"

const Main = styled.main`
  background-image: url(${bg.src});
  background-size: cover;
  background-position: center top 20%;
  color: #1c1c1c;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  h1 {
    font-size: 6rem;
    margin-bottom: 0;
    line-height: 1;
  }
  span {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    opacity: 0.8;
  }
`

export default function Success() {
  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
  }, [])

  const { setCartItems, setTotalPrice } = useAppContext()

  return (
    <Main>
      <h1>Thank you</h1>
      <span>purchase succesful c:</span>
      <Button>
        <Link href={"/"}>back to shop</Link>
      </Button>
    </Main>
  )
}
