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

  &:active {
    transform: scale(0.9);
  }
`
export const VolumeCont = styled.div`
  display flex;
  justify-content: space-between;
  

  
`

export const VolumeBtns = styled(Button)`
  flex: 1;
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
`

export const ImgCont = styled.figure``
export const InfoCont = styled.main`
  font-family: ${({ theme }) => theme.ffS};
  display: flex;
  flex-direction: column;
  gap: 1em;
`
export const SmallDetailsP = styled.p`
  font-family: ${({ theme }) => theme.ffM};
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 3px 20px black;
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
`

export const NameP = styled.p`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.ffM};
  font-weight: 800;
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
`

export const StyledCarouselProv = styled(CarouselProvider)`
  position: relative;
  display: flex;
  align-items: center;
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
`

export const Profile = styled(CartCont)`
  background-image: url(${blankProfile.src});
  background-size: cover;
  background-position: center top;
  margin-left: auto;
  margin-right: 0.8em;
`
