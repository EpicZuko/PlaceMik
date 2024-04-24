import React, { useState } from 'react'
import styled from 'styled-components'
import starFillpng from '../../../assets/img/star fill.png'
import Button from '../button/Button'
import SliderImg from './SliderImg'

const CardSale = ({ array }) => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [hoverSliderAdd, setHoverSliderAdd] = useState(false)
  const handleMouseEnter = (id) => {
    setHoveredItem(id)
    setHoverSliderAdd(true)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
    setHoverSliderAdd(false)
  }

  return (
    <CardSaleContainerStyled>
      {array?.map((element) => (
        <CardSaleStyled
          key={element?.id}
          onMouseEnter={() => handleMouseEnter(element?.id)}
          onMouseLeave={handleMouseLeave}
        >
          {element.discounts && (
            <SPANDISCOUNTSTYLED>-{element?.discounts}</SPANDISCOUNTSTYLED>
          )}
          <SliderImg
            img={element?.img}
            id={element?.id}
            hoverSliderAdd={hoverSliderAdd}
            hovereditem={hoveredItem}
          />
          <PRICESTYLED
            id={element?.id}
            hovereditem={hoveredItem}
            discountamount={element?.discountAmount}
          >
            {element?.price} ₽
            {element?.discountAmount && (
              <PRICESTYLEDIV>{element?.discountAmount} ₽</PRICESTYLEDIV>
            )}
          </PRICESTYLED>
          {hoveredItem === element?.id && (
            <DIVRAITINGSTYLED>
              <RAITINGSTYLED>{element?.raiting}</RAITINGSTYLED>
              <img src={starFillpng} alt='' />
              <REVIEWSSTYLED>{element?.reviews} отзывов</REVIEWSSTYLED>
            </DIVRAITINGSTYLED>
          )}
          {hoveredItem === element?.id && (
            <TEXTMSTYLED>{element?.textSmaller}</TEXTMSTYLED>
          )}
          <TEXTSTYLED>{element?.text}</TEXTSTYLED>
          {hoveredItem === element?.id && (
            <Button variant='addToCart'>В корзину</Button>
          )}
        </CardSaleStyled>
      ))}
    </CardSaleContainerStyled>
  )
}

export default CardSale

const CardSaleContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 1280.25px;
  margin: 0 auto;
`
const CardSaleStyled = styled.div`
  width: 180.5px;
  height: auto;
  gap: 0px;
  border-radius: 4px 0px 0px 0px;
  opacity: 0px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.12);
  padding: 11px 10px;
  transition:
    height 1s,
    border-radius 1s,
    opacity 1s,
    background 1s,
    box-shadow 1s,
    transform 1s;

  &:hover {
    width: 220px;
    height: 426px;
    border-radius: 4px 0px 0px 0px;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.35);
    transform: translateY(-10px);
    position: relative;
    & span {
      position: relative;
      left: 175px;
      top: 30px;
    }
  }
`
const SPANDISCOUNTSTYLED = styled.span`
  z-index: 1000;
  position: relative;
  width: 32px;
  height: 16px;
  top: 24px;
  left: 140px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  line-height: 11.72px;
  border: 1px solid rgba(255, 67, 67, 1);
  border-radius: 10px;
  padding: 2px 6px;
`
const DIVRAITINGSTYLED = styled.div`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  gap: 8px;
`
const REVIEWSSTYLED = styled.h3`
  width: 65px;
  height: 14px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  text-align: left;
  padding: 0px;
  margin: 0px;
`
const RAITINGSTYLED = styled.h3`
  padding: 0px;
  margin: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  text-align: left;
`
const PRICESTYLED = styled.h4`
  height: 16px;
  gap: 14px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  text-align: left;
  color: ${(props) => props.discountamount && 'rgba(255, 67, 67, 1)'};
  display: flex;
  align-items: center;
  padding-top: ${(props) => (props.hovereditem === props.id ? '0px' : '19px')};
  margin: 0px;
`
const PRICESTYLEDIV = styled.div`
  padding: 0px;
  margin: 0px;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: left;
  width: 35px;
  height: 12px;
  gap: 0px;
  color: rgba(70, 70, 70, 0.55);
  opacity: 0px;
  position: relative;
  border: 1px solid transparent;
  overflow: hidden;
  width: 35px;
  height: 12px;

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 67, 67, 1);
    border-left: none;
    transform-origin: top left;
    transform: rotate(-5.17deg);
  }
`
const TEXTSTYLED = styled.p`
  gap: 0px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.9px;
  text-align: left;
  opacity: 0px;
  color: rgba(0, 0, 0, 1);
`
const TEXTMSTYLED = styled.h2`
  width: 55px;
  height: 16px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`
