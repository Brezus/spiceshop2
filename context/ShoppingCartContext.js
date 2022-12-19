import React, { useState, createContext, useContext } from "react"
import { nanoid } from "nanoid"

const AppContext = createContext()

export default function ShoppingCartContext({ children }) {
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [openCart, setOpenCart] = useState(false)
  const [newItemAdded, setNewItemAdded] = useState(false)
  const [newItemsQuant, setNewItemsQuant] = useState(0)

  function addToCart(product, quantity = 1) {
    const isInside = cartItems?.find((prod) => prod._id === product._id)

    setTotalPrice((prev) => prev + product.price * quantity)
    setTotalQuantity((prev) => {
      return prev >= 99 ? 99 : prev + quantity
    })
    if (isInside) {
      setCartItems((prev) => {
        return prev.map((cartProd) => {
          return cartProd._id == product._id
            ? { ...cartProd, quantity: cartProd.quantity + quantity }
            : { ...cartProd }
        })
      })
    } else {
      product.quantity = quantity
      setCartItems((prev) => [...prev, { ...product }])
    }

    setNewItemsQuant((prev) => prev + quantity)
    setQuantity(1)
    setNewItemAdded(true)
  }

  function incrementQuant(openCart = false, id) {
    if (openCart) {
      const chosenProd = cartItems.findIndex((prod) => prod._id === id)
      setTotalPrice((prev) => prev + cartItems[chosenProd]?.price)
      setCartItems((prev) => {
        return prev.map((cartProd, i) => {
          if (cartProd._id === id) {
            console.log(cartProd)
            return { ...cartProd, quantity: cartProd.quantity + 1 }
          } else {
            return cartProd
          }
        })
      })
    } else {
      setQuantity((prev) => prev + 1)
    }
  }
  function decrementQuant(openCart, id) {
    if (openCart) {
      const chosenProd = cartItems.findIndex((prod) => prod._id === id)
      setTotalPrice((prev) => prev - cartItems[chosenProd]?.price)
      setCartItems((prev) => {
        if (prev.find((cartProd) => cartProd._id === id)?.quantity === 1) {
          return prev.filter((cartProd) => cartProd._id !== id)
        } else {
          return prev.map((cartProd) => {
            return cartProd._id === id
              ? { ...cartProd, quantity: cartProd.quantity - 1 }
              : cartProd
          })
        }
      })
      return
    } else {
      setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
    }
  }
  function removeItem(id) {
    setCartItems((prev) =>
      prev.filter((prod) => {
        return prod._id != id
      })
    )
  }

  function openCt() {
    setOpenCart(true)
    setNewItemAdded(false)
    setNewItemsQuant(0)
  }
  function closeCt() {
    setOpenCart(false)
  }

  return (
    <AppContext.Provider
      value={{
        quantity,
        totalQuantity,
        incrementQuant,
        decrementQuant,
        addToCart,
        cartItems,
        removeItem,
        openCt,
        closeCt,
        openCart,
        cartItems,
        newItemAdded,
        newItemsQuant,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
