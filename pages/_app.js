import "../styles/globals.css"
import Layout from "../components/Layout"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { vars } from "../styles/vars"
import ShoppingCartContext from "../context/ShoppingCartContext"
import { Raleway, Montserrat } from "@next/font/google"

export const raleway = Raleway({
  subsets: ["latin"],
})
export const montserrat = Montserrat({
  subsets: ["latin"],
})

const Wrapper = styled.div`
  color: white;
  background: ${({ theme }) => theme.bgCol};
  // font-family: ${({ theme }) => theme.ffM};
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={vars}>
        <Wrapper className={`${raleway.className}`}>
          <ShoppingCartContext>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ShoppingCartContext>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp
