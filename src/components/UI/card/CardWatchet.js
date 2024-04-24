import React from 'react'
import styled from 'styled-components'
import logostore from '../../../assets/img/logostore.svg'

const CardWatched = ({ price, img, text, variant }) => {
  return (
    <CARDWATCHEDSTYLED variant={variant}>
      {variant === 'shopsForYou' ? (
        <DIVSHOPSSTYLED>
          <img src={logostore} alt='' />
          <h2>Marple </h2>
        </DIVSHOPSSTYLED>
      ) : (
        <div>
          <img src={img} alt='' />
        </div>
      )}
      {variant === 'shopsForYou' ? (
        <DIVIMGSTYLED>
          {img && (
            <IMGSTYLEDIV>
              <IMGSTYLED src={img} alt='' />
            </IMGSTYLEDIV>
          )}
          <IMGSTYLEDIV>
            <IMGSTYLED src={img} alt='' />
          </IMGSTYLEDIV>
          <IMGSTYLEDIV>
            <IMGSTYLED src={img} alt='' />
          </IMGSTYLEDIV>
        </DIVIMGSTYLED>
      ) : (
        <div>
          <TEXTSTYLED>{text}</TEXTSTYLED>
          <PRICESTYLED>от {price} ₽</PRICESTYLED>
        </div>
      )}
    </CARDWATCHEDSTYLED>
  )
}

export default CardWatched

const CARDWATCHEDSTYLED = styled.div`
  width: ${(props) => (props.variant === 'shopsForYou' ? '296px' : '241px')};
  height: ${(props) =>
    props.variant === 'shopsForYou' ? '208px' : '180.5px '};
  gap: 22px;
  border-radius: ${(props) =>
    props.variant === 'shopsForYou'
      ? '0px 4px 40px 0px rgba(0, 0, 0, 0.12)'
      : '4px 0px 0px 0px'};
  opacity: 0px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12);
  display: ${(props) => (props.variant === 'shopsForYou' ? '' : 'flex')};
  align-items: center;
  border-radius: ${(props) => (props.variant === 'shopsForYou' ? '' : '10px')};
  padding: 14px 36px;
`
const DIVSHOPSSTYLED = styled.div`
  display: flex;
  justify-content: center;
  gap: 41px;
`
const DIVIMGSTYLED = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`
const IMGSTYLEDIV = styled.div`
  border: 0.1px solid rgba(60, 60, 60, 0.3);
  width: 80px;
  height: 81px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  padding: 0px;
  margin: 0px;
`
const IMGSTYLED = styled.img`
  width: 80px;
  height: 81px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
  padding: 0px;
  margin: 0px;
`
const TEXTSTYLED = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  line-height: 14.9px;
  text-align: left;
`
const PRICESTYLED = styled.h1`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  text-align: left;
`
