import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import { TiChevronLeft } from "react-icons/ti"
import { CartCont, Profile } from "../styles/spiceStyles"
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
  justify-content: ${(props) => (props.details ? "start" : "space-between")};
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

  a {
    width: 100%;
  }


  ul {
    display: flex;
    list-style: none;
    gap: 1em;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-left: 0;
    text-align: center;

    li {
      font-size: .8em;
    }
  }
`

const H1 = styled.h1`
  cursor: pointer;
  z-index: 2;
  color: ${(props) => (props.dark ? "black" : "white")};
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
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
  console.log(user)
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
          {/* <button>upload photo</button> */}
          <input
            onClick={() => console.log("clicked")}
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log("fired")
              setSelectedImage(event.target.files[0])
            }}
          />
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
      <Link href={"/"}>
        <H1>feelin spicy</H1>
      </Link>
      <ul>
        <Link href="#spices">
          <Li style={{ cursor: "pointer", paddingLeft: "0" }}>spices</Li>
        </Link>
        {!user && (
          <Link href="/auth/Login">
            <Li style={{ cursor: "pointer" }}>log-in</Li>
          </Link>
        )}
      </ul>

      <CartCont
        style={{ margin: `${!user ? "0 auto" : "0"}` }}
        onClick={openCt}
      >
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
