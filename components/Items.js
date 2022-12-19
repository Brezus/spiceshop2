import React from "react"
import summerBanner from "../assets/summerBanner.jpg"
import winterBanner from "../assets/winterBanner2.webp"
import styled from "styled-components"

const Banner = styled.div`
  height: 50px;
  width: 100%;
  background-image: ;
`

const ItemsCont = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: start;
  gap: 1em;
  width: ${({ theme }) => theme.width8};
  margin-inline: auto;
  text-align: center;
`

export default function Items({ holiday, children }) {
  return (
    <>
      <Banner />
      <ItemsCont>{children}</ItemsCont>
    </>
  )
}
