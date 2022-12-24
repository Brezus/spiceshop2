import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import { TiChevronLeft } from "react-icons/ti"
import { Profile } from "../styles/spiceStyles"
import { TiShoppingCart } from "react-icons/ti"
import { useAppContext } from "../context/ShoppingCartContext"
import Cart from "./Cart"
import { createGlobalStyle } from "styled-components"
import { auth, signOut } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.cartOpend ? "hidden" : "initial")};
    position: relative;
  }
`

const Navigation = styled.nav`
  background-color: "rgba(0, 0, 0, 0.3)"};
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  display: flex;
  // justify-content: ${(props) => (props.details ? "start" : "space-between")};
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
  // border: ${(props) => (props.details ? "none" : "1px solid white;")};
  align-items: center;
  width: ${({ theme }) => theme.width};
  margin-inline: auto;
  padding-inline: 1em;
  border-radius: ${({ theme }) => theme.bRadius};
  font-family: ${({ theme }) => theme.ffM};
  z-index: 5;
  }
`
const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 1em;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-left: 0;
  text-align: center;
  list-style: none;

  li {
    font-size: 0.8em;
  }

  @media (min-width: 768px) {
    width: auto;

    li {
      font-size: 1.2rem;
    }
  }
`
const Atag = styled(Link)`
  width: ${(props) => (props.details ? "initial" : "100%")};
  @media (min-width: 768px) {
    width: auto;
  }
`

const H1 = styled.h1`
  cursor: pointer;
  z-index: 2;
  color: ${(props) => (props.dark ? "black" : "white")};
  font-size: 1.1rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const Li = styled.li`
  z-index: 2;
`

const ProfileCont = styled.div`
  position: relative;
`
const ProfileActions = styled.div`
  position: absolute;
  left: -95%;
  top: 105%;
  transform: translate(-105%, -50%)
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  button {
    width: 150px;
  }
`
const CartCont = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: rgba(17, 12, 46, 0.2) 0px 0px 10px 0px;
  display: grid;
  place-items: center;
  align-self: center;
  background: white;
  cursor: pointer;
  position: relative;
  z-index: 4;
  margin: ${(props) => (props.user ? "0" : "0 auto")};

  svg {
    font-size: 1.8rem;
    color: gray;
  }

  p {
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    background: red;
    border-radius: 50%;
    width: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 0.8em;
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`

export default function Nav() {
  const [user, isLoading] = useAuthState(auth)
  const [openProfile, setOpenProfile] = useState(false)
  // const [selectedImage, setSelectedImage] = useState(null)
  const profileRef = useRef()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        openProfile &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setOpenProfile(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [openProfile])
  const { openCt, newItemAdded, newItemsQuant, cartItems, openCart } =
    useAppContext()

  const router = useRouter()

  const toggleProfile = () => setOpenProfile((prev) => !prev)
  const closeProfile = () => setOpenProfile(false)

  const userProfile = user && (
    <ProfileCont onClick={toggleProfile} ref={profileRef}>
      <Profile style={{ backgroundImage: `url(${user.photoURL})` }} />
      {openProfile && (
        <ProfileActions>
          {/* <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log("fired")
              setSelectedImage(event.target.files[0])
            }}
          /> */}
          <button onBlur={closeProfile} onClick={() => auth.signOut()}>
            sign out
          </button>
        </ProfileActions>
      )}
    </ProfileCont>
  )

  const chevronStyles = {
    fontSize: "2rem",
    color: "black",
    cursor: "pointer",
    position: "relative",
    left: "-85%",
  }

  const chevronContStyles = { zIndex: "2" }

  const homeNavigation = (
    <Navigation>
      <Atag href={"/"}>
        <H1>feelin spicy</H1>
      </Atag>
      <Ul>
        <Link href="#spices">
          <Li style={{ cursor: "pointer", paddingLeft: "0" }}>spices</Li>
        </Link>
        {!user && (
          <Link href="/auth/Login">
            <Li style={{ cursor: "pointer" }}>log-in</Li>
          </Link>
        )}
      </Ul>

      <CartCont user={user} onClick={openCt}>
        <TiShoppingCart />
        {newItemAdded >= 1 && (
          <p>{newItemsQuant >= 99 ? newItemsQuant + "+" : newItemsQuant}</p>
        )}
      </CartCont>
      {userProfile}
    </Navigation>
  )

  const detailsNavigation = (
    <Navigation details>
      <Link href={"/"}>
        <div style={chevronContStyles}>
          <TiChevronLeft style={chevronStyles} />
        </div>
      </Link>
      {!user && (
        <Link href="/auth/Login">
          <p style={{ cursor: "pointer", color: "black" }}>log-in</p>
        </Link>
      )}
      {userProfile}
    </Navigation>
  )

  const renderNav = (router) => {
    switch (router?.pathname) {
      case "/":
        return homeNavigation
      case "/[product]/[spice]":
        return detailsNavigation
      case "/auth/Login":
        return null
    }
  }

  return (
    <div>
      <GlobalStyle cartOpend={openCart} />
      {renderNav(router)}
    </div>
  )
}
