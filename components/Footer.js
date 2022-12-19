import React from "react"
import styled from "styled-components"

const FooterDiv = styled.footer`
  background: ${({ theme }) => theme.bgColDark};
  padding: 3em;
`

export default function Footer() {
  return <FooterDiv>Made by Roshane Miller</FooterDiv>
}
