import React, { useState, useEffect } from "react"
import { urlFor } from "./client"
import Link from "next/link"
import { nanoid } from "nanoid"
import styled from "styled-components"
import { TiStarOutline } from "react-icons/ti"
import { TiStar } from "react-icons/ti"
import { TiShoppingCart } from "react-icons/ti"
import { useAppContext } from "../context/ShoppingCartContext"
import { auth, database } from "../utils/firebase"
import { collection, addDoc } from "firebase/firestore"

const StyledLink = styled.div`
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;

  img {
    width: 80%;
    height: 150px;
    object-fit: contain;
    border-radius: 10px;
    transition: all 0.5s ease;
  }

  &:hover img {
    background: #e8e8e8;
  }
`
const Info = styled.div`
  color: black;

  h3 {
    font-size: ${({ theme }) => theme.fsM};
  }

  p {
    font-size: ${({ theme }) => theme.fsS};
  }

  p:last-of-type {
    font-weight: bold;
  }
`

const ShoppingCart = styled.div`
  position: absolute;
  right: 25px;
  top: 10px;
  // display: none;
  display: ${(props) => (props.inCartProp ? "block" : "none")};

  ${StyledLink} & {
    color: ${(props) => (props.inCartProp ? "yellow" : "red")};
  }

  ${StyledLink}:hover & {
    display: block;
  }
`

export default function Product({ spice }) {
  const { addToCart, cartItems } = useAppContext()
  const [inCart, setInCart] = useState(false)

  useEffect(() => {
    setInCart(cartItems.find((item) => (item._id === spice._id ? true : false)))
  }, [cartItems])

  const stars = new Array(4)
    .fill(<TiStar />)
    .map((star, i) => <TiStar style={{ color: "yellow" }} key={nanoid()} />)

  return (
    <>
      <Link
        href={`/${spice.winterSpice ? "winter-spice" : "summer-spice"}/${
          spice.slug.current
        }`}
      >
        <StyledLink>
          <img src={spice?.image && urlFor(spice.image[0])} alt={spice.name} />
          <Info>
            <h3>{spice.name}</h3>
            <div>
              {stars}
              <TiStarOutline />
            </div>
            <p>${spice.price}</p>
            <ShoppingCart inCartProp={inCart}>
              <TiShoppingCart
                onClick={(e) => {
                  if (e.defaultPrevented) return
                  e.preventDefault()
                  // setInCart(true)
                  addToCart(spice, 1)
                }}
                style={{ color: `${inCart ? "green" : "red"}` }}
              />
            </ShoppingCart>
          </Info>
        </StyledLink>
      </Link>
    </>
  )
}
