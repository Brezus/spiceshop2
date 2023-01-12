import React, { useState } from "react"
import styled, { ThemeConsumer } from "styled-components"
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import spiceBg from "../../assets/pexels-spice.jpeg"
import Link from "next/link"
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../../utils/firebase"
import { useRouter } from "next/router"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import { raleway } from "../_app"

const LoginCont = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  color: black;
  text-align: center;
  // font-family: ${({ theme }) => theme.ffM};
`

const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
  gap: 0.8em;

  h1 {
    font-size: 2.2rem;
  }
`
const LoginSecondary = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: white;
  background-image: url(${spiceBg.src});
  background-color: rgba(20, 20, 20, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center bottom;
  text-transform: capitalize;
`

const Icons = styled.div`
  display: flex;
  gap: 0.8em;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`
const Button = styled.button`
  padding: 1em 2.5em;
  color: white;
  background: #0e2e37;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
const LineSplit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;

  div {
    width: 30%;
    height: 1px;
    background: black;
  }
`

export default function Login() {
  const router = useRouter()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  const goProvider = new GoogleAuthProvider()

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, goProvider)
      console.log(result)
      router.back()
    } catch (error) {
      console.log(error)
    }
  }
  const ghProvider = new GithubAuthProvider()
  const githubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, ghProvider)
      console.log(result)
      router.back()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginCont className={`${raleway.className}`}>
      <LoginMain>
        <h1>Log in to your account</h1>
        <p>login using one of these providers</p>
        <Icons>
          <FcGoogle onClick={() => googleLogin()} />
          <BsGithub onClick={() => githubLogin()} />
        </Icons>
        <LineSplit>
          <div></div>
          <p>or</p>
          <div></div>
        </LineSplit>
        <Button>
          <Link href={"/"}>back to home</Link>
        </Button>
      </LoginMain>
      <LoginSecondary>
        <h2>new here?</h2>
        <p>sign up and discover your new favourite food ritual</p>
      </LoginSecondary>
    </LoginCont>
  )
}
