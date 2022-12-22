import styled from "styled-components"
import blankProfile from "../assets/noprofile.jpg"
import { CarouselProvider, Slider, DotGroup } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

export const Button = styled.button`
  padding: 0.5em 1.5em;
  cursor: pointer;
  transition: transform 0.2s ease;
  border-radius: 50px;
  background: rgb(61, 61, 61);
  background: linear-gradient(
    63deg,
    rgba(61, 61, 61, 1) 0%,
    rgba(30, 30, 30, 1) 100%
  );
  color: white;
  font-weight: 600;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  display: inline-block;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 768px) {
  }
`
export const VolumeCont = styled.div`
  display flex;
  justify-content: space-between;
`

export const VolumeBtns = styled(Button)`
  flex: 2;
`
export const Quant = styled.p`
  padding: 0.5em 1.5em;
  flex: 1;
  text-align: center;
  font-weight: 600;
  opacity: 0.5;
`
export const ButtonsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 1em;

  @media (min-width: 768px) {
    width: 60%;
    justify-content: center;
    flex-direction: column-reverse;
  }
`

export const ImgCont = styled.figure``
export const InfoCont = styled.main`
  font-family: ${({ theme }) => theme.ffS};
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    flex: 1;
    padding: 3em 2em;
    background: white;
  }
`
export const SmallDetailsP = styled.p`
  font-family: ${({ theme }) => theme.ffM};
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: white;
  opacity: 0.8;
  text-shadow: 0px 3px 20px black;

  @media (min-width: 768px) {
    text-shadow: 5px 3px 14px black;
    position: absolute;
    left: -91%;
    bottom: 3%;
    letter-spacing: 0;
    opacity: 0.8;
  }
`
export const DetailsP = styled.p`
  font-family: ${({ theme }) => theme.ffM};
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.5;
`

export const PriceP = styled(SmallDetailsP)`
  font-size: 1.4rem;
  color: black;
  text-shadow: none;

  @media (min-width: 768px) {
    text-shadow: none;
    position: initial;
  }
`

export const NameP = styled.p`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.ffM};
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`
export const DetailsCont = styled.article`
  color: black;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 5em 3em;
  background: rgb(245, 245, 245);
  background: linear-gradient(
    63deg,
    rgba(245, 245, 245, 1) 0%,
    rgba(215, 215, 215, 1) 100%
  );

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }
`

export const StyledCarouselProv = styled(CarouselProvider)`
  position: relative;
  display: flex;
  align-items: center;
  // height: 100vh;
  max-height: 500px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    63deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(227, 227, 227, 1) 100%
  );
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  border-radius: 8px;

  .slideInner___2mfX9,
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    background: none;
    box-shadow: none;
    flex: 1;
    max-height: none;
    min-height: 100vh;
  }
`
export const StyledSlider = styled(Slider)`
  width: ${({ theme }) => theme.width};
`
export const StyledDotGroup = styled(DotGroup)`
  display: flex;
  flex-direction: column;
  gap: 2em;

  button {
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background: gray;
  }
`
export const CartCont = styled.div`
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
    margin-right: auto;
  }
`

export const Profile = styled(CartCont)`
  background-image: url(${blankProfile.src});
  background-size: cover;
  background-position: center top;
  margin-left: auto;
  margin-right: 0.8em;

  @media (min-width: 768px) {
    margin-right: initial;
  }
`
