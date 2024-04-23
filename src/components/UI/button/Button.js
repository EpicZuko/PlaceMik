import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'

const Button = ({ children, variant, onClick, ...props }) => {
  return (
    <ButtonStyled variant={variant} onClick={onClick} {...props}>
      {children}
    </ButtonStyled>
  )
}

export default Button

const getAllGoodsButton = (props) => {
  return (
    props.variant === 'allGoods' &&
    'width: 187px; height: 44px; cursor:pointer; border: 1.5px 0px 0px 0px; border-width: 2px;border-color: #F64D4D;border-image-source: linear-gradient(96.78deg, #F64D4D -57.09%, #4D5EF6 101.17%);  border-image-outset: 0; border-image-width: 1;  border-image-slice: 1;  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12); color: rgba(0, 0, 0, 1); opacity: 0px; font-family: Roboto;font-size: 14px;font-weight: 500; line-height: 16.41px; text-align: center;'
  )
}
const getAddToCardButton = (props) => {
  return (
    props.variant === 'addToCart' &&
    'width: 180px; border:none; cursor:pointer; box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12); background: linear-gradient(45deg, #F64D4D, #4D5EF6); height: 34px; padding: 6px 57px 6px 57px; gap: 10px; opacity: 0px; font-family: Roboto; font-size: 14px; font-weight: 500; line-height: 16.41px;text-align: center; color: rgba(255, 255, 255, 1);'
  )
}
const getSubscribeButton = (props) => {
  return (
    props.variant === 'subscribe' &&
    'width: 130px; color:rgba(77, 94, 246, 1); cursor:pointer; border: 0.7px solid rgba(255, 255, 255, 1); background: rgba(255, 255, 255, 1); background: rgba(255, 255, 255, 1); box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12); height: 35px; gap: 0px; border: 0.7px 0px 0px 0px; opacity: 0px; font-family: Roboto; font-size: 14px; font-weight: 400; line-height: 16.41px; text-align: center;'
  )
}
const getEmailButton = (props) => {
  return (
    props.variant === 'email' &&
    'width: 260px; cursor:pointer; height: 35px; color: rgba(255, 255, 255, 1); opacity: 0px; box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12); font-family: Roboto; font-size: 14px; font-style: italic; font-weight: 300; line-height: 16.41px; text-align: center; border: 0.7px solid rgba(255, 255, 255, 1); background:none;'
  )
}
const ButtonStyled = styled.button`
  ${getAllGoodsButton}
  ${getAddToCardButton}
  ${getSubscribeButton}
  ${getEmailButton}
  @media only screen and (min-width: 600px) {
    ${({ variant }) =>
      variant === 'allGoods' &&
      `
      width: 250px;
      height: 60px;
    `}

    ${({ variant }) =>
      variant === 'addToCart' &&
      `
      width: 220px;
      height: 40px;
    `}
  }
`
