import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()
  const renderLayout = (router) => {
    switch (router?.pathname) {
      case "/auth/Login":
        return <>{children}</>
      default:
        return (
          <>
            <Nav />
            {children}
            <Footer />
          </>
        )
    }
  }
  return <>{renderLayout(router)}</>
}
