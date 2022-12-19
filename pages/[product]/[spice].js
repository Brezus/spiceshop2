import React, { useContext, useEffect } from "react"
import { client } from "../../components/client"
import {
  Button,
  VolumeCont,
  VolumeBtns,
  Quant,
  ButtonsCont,
  InfoCont,
  SmallDetailsP,
  DetailsP,
  PriceP,
  NameP,
  DetailsCont,
  CartCont,
} from "../../styles/spiceStyles"
import Display from "../../components/Display"
import Script from "next/script"
import { useAppContext } from "../../context/ShoppingCartContext"
import Cart from "../../components/Cart"
import { TiShoppingCart } from "react-icons/ti"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.cartOpend ? "hidden" : "initial")};
    position: relative;
  }
`

export default function ProductDetails({ selectedSpice, products }) {
  const { details, detailsLong, image, name, price } = selectedSpice
  const {
    cartItems,
    openCart,
    decrementQuant,
    incrementQuant,
    addToCart,
    quantity,
    openCt,
    newItemAdded,
    newItemsQuant,
    closeCt,
  } = useAppContext()
  useEffect(() => {
    closeCt()
  }, [])

  return (
    <>
      <GlobalStyle cartOpend={openCart} />
      <DetailsCont>
        <Display data={{ image, selectedSpice }} />
        <InfoCont>
          <SmallDetailsP>{details}</SmallDetailsP>
          <NameP>{name}</NameP>
          <DetailsP>{detailsLong}</DetailsP>
          <PriceP>${price}.00</PriceP>
          <ButtonsCont>
            <Button onClick={() => addToCart(selectedSpice, quantity)}>
              add to cart
            </Button>
            <VolumeCont>
              <VolumeBtns
                onClick={() => {
                  decrementQuant(openCart)
                }}
              >
                -
              </VolumeBtns>
              <Quant>{quantity}</Quant>
              <VolumeBtns
                onClick={() => {
                  incrementQuant(openCart)
                }}
              >
                +
              </VolumeBtns>
            </VolumeCont>
          </ButtonsCont>
        </InfoCont>
        <CartCont onClick={openCt}>
          <TiShoppingCart />
          {newItemAdded >= 1 && (
            <p>{newItemsQuant >= 99 ? newItemsQuant + "+" : newItemsQuant}</p>
          )}
        </CartCont>
        {openCart && <Cart items={cartItems} allItems={products} />}
      </DetailsCont>
    </>
  )
}

export async function getStaticPaths() {
  const query = `*[_type == "spiceProducts"] {
    slug {
      current
    }
  }`
  const products = await client.fetch(query)

  const paths = products.map((spiceProduct) => {
    return {
      params: {
        product: `${
          spiceProduct.winterSpice ? "winter-spice" : "summer-spice"
        }`,
        spice: spiceProduct.slug.current,
      },
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params: { spice } }) {
  const query = `*[_type == 'spiceProducts' && slug.current == '${spice}'][0]`
  const selectedSpice = await client.fetch(query)

  const productsQuery = `*[_type == "spiceProducts"]`
  const products = await client.fetch(productsQuery)
  return {
    props: {
      selectedSpice,
      spice,
      products,
    },
  }
}
