/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Slide } from 'react-slideshow-image'
import styled from 'styled-components'
import 'react-slideshow-image/dist/styles.css'

const Example = ({ images }) => {
  const slideProperties = {
    duration: 1000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  }

  return (
    <DIV>
      <Slide {...slideProperties} arrows={false}>
        {images?.map((elem, index) => {
          return (
            <div className='each-slide-effect' key={index}>
              <div style={{ backgroundImage: `url(${elem})` }} />
            </div>
          )
        })}
      </Slide>
    </DIV>
  )
}

export default Example

const DIV = styled.div`
  width: 366px;
  height: 208px;
  z-index: 1000;
  .each-slide-effect > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 208px;
  }

  .each-slide-effect span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
`
