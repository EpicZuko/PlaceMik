import React, { forwardRef } from 'react'
import styled from 'styled-components'
import searchIcons from '../../../assets/img/search-interface-symbol.png'

const Input = forwardRef(function Input(props, ref) {
  return (
    <div>
      <StyledInput
        ref={ref}
        variant={props.variant}
        {...props}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
      />
      <IMGSEARCHICONS src={searchIcons} alt='' />
    </div>
  )
})

export default Input

const StyledInput = styled.input`
  width: 624px;
  height: 46px;
  gap: 0px;
  border: 2px 0px 0px 0px;
  opacity: 0px;
  border: 2px solid;
  border: 2px solid transparent;
  border-image-source: linear-gradient(
    96.78deg,
    #f64d4d -57.09%,
    #4d5ef6 101.17%
  );
  border-image-slice: 1;
  outline: none;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: rgba(0, 0, 0, 1);
`
const IMGSEARCHICONS = styled.img`
  position: relative;
  right: 40px;
  top: 10px;
`
