import Head from "next/head"
import styles from "../styles/Home.module.css"
import { client } from "../components/client"
import Product from "../components/product"
import styled, { withTheme } from "styled-components"
import Hero from "../components/Hero"
import About from "../components/AboutUs"
import Items from "../components/Items"
import Cart from "../components/Cart"
import { useAppContext } from "../context/ShoppingCartContext"
import { ref, onValue } from "firebase/database"
import { useAuthState } from "react-firebase-hooks/auth"
import { database, auth } from "../utils/firebase"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const H2 = styled.h2`
  color: black;
  text-align: center;
`

export default function Home({ spiceProducts }) {
  const router = useRouter()
  const [paymentSuccesful, setPaymentSuccesful] = useState(null)
  console.log(router)
  const {
    cartItems,
    openCart,
    setCartItems,
    setTotalPrice,
    setTotalQuantity,
    setQuantity,
  } = useAppContext()

  useEffect(() => {
    if (router?.asPath === "/?success=true") {
      localStorage.clear()
      setCartItems([])
      setTotalPrice(0)
      setTotalQuantity(0)
      setPaymentSuccesful(true)
      router.push("/")
    } else if (router?.asPath === "/?canceled=true") {
      setPaymentSuccesful(false)
      router.push("/")
    } else {
      setPaymentSuccesful(null)
    }
  }, [])

  const [user] = useAuthState(auth)
  const productsRendered = spiceProducts.map((prod) => (
    <Product key={prod?._id} spice={prod} />
  ))
  const winterProducts = spiceProducts
    .filter((product) => product.winterSpice)
    .map((prod) => <Product key={prod?._id} spice={prod} />)

  const summerProducts = spiceProducts
    .filter((product) => !product.winterSpice)
    .map((prod) => <Product key={prod?._id} spice={prod} />)

  // const addToCartDb = ref(database, 'cartItems/' + user.uid + '/starCount')
  return (
    <>
      <Head>
        <title>feelin spicy</title>
      </Head>
      {paymentSuccesful ? (
        <p style={{ color: "black" }}>hoorah</p>
      ) : paymentSuccesful === null ? null : (
        <p style={{ color: "black" }}>failed</p>
      )}
      <Hero />
      <About />
      <div style={{ padding: "4em 0 6em" }} id="spices">
        <H2>Our Collection</H2>
        <Items>{winterProducts}</Items>
        <hr style={{ width: "80%", marginTop: "4em" }} />
        <Items>{summerProducts}</Items>
      </div>
      {openCart && <Cart items={cartItems} />}
    </>
  )
}

export async function getServerSideProps() {
  const spiceProducts = await client.fetch(`*[_type == "spiceProducts"]`)
  return {
    props: {
      spiceProducts,
    },
  }
}
