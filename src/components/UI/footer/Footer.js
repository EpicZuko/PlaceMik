import React from 'react'
import styled from 'styled-components'
import facebookImg from '../../../assets/img/facebook.svg'
import instagramImg from '../../../assets/img/instagram.svg'
import placeImg from '../../../assets/img/placeMik.svg'
import vectorImg from '../../../assets/img/vector.svg'
import Button from '../button/Button'

const Footer = () => {
  return (
    <FOOTERSTYLED>
      <DIVSTYLED>
        <ul>
          <H1STYLED>Покупателям</H1STYLED>
          <LISTSTYLED>Как это работает</LISTSTYLED>
          <LISTSTYLED>Защита покупателя</LISTSTYLED>
          <LISTSTYLED> Условия оплаты</LISTSTYLED>
          <LISTSTYLED>Условия использования</LISTSTYLED>
          <LISTSTYLED>Регистрация аккаунта</LISTSTYLED>
        </ul>
        <ul>
          <H1STYLED>Поставщикам</H1STYLED>
          <LISTSTYLED>Как стать продавцом </LISTSTYLED>
          <LISTSTYLED> Правила участия</LISTSTYLED>
          <LISTSTYLED>Личный кабинет продавца</LISTSTYLED>
        </ul>
        <ul>
          <H1STYLED>О компании</H1STYLED>
          <LISTSTYLED>О PlaceMik</LISTSTYLED>
          <LISTSTYLED> Новости</LISTSTYLED>
          <LISTSTYLED> Часто задаваемые вопросы</LISTSTYLED>
          <LISTSTYLED>Служба поддержки</LISTSTYLED>
          <LISTSTYLED>Сообщить о нарушении авторских прав</LISTSTYLED>
        </ul>
        <div>
          <TEXTSTYLED>
            Хотите быть в курсе последних новостей и акций?
          </TEXTSTYLED>
          <DIVBUTTONSTYLED>
            <Button variant='email'>konstantinkonstantinov@yandex.ru</Button>
            <Button variant='subscribe'>Подписаться</Button>
          </DIVBUTTONSTYLED>
          <H2STYLED>Мы в соцсетях</H2STYLED>
          <DIVIMGSTYLED>
            <img src={vectorImg} alt='' />
            <img src={instagramImg} alt='' />
            <img src={facebookImg} alt='' />
          </DIVIMGSTYLED>
        </div>
      </DIVSTYLED>
      <DIVENDSTYLED>
        <img src={placeImg} alt='place mik' />
        <TSTYLED>© PlaceMik.ru, 2021</TSTYLED>
      </DIVENDSTYLED>
    </FOOTERSTYLED>
  )
}

export default Footer

const FOOTERSTYLED = styled.footer`
  background: linear-gradient(96.78deg, #f64d4d -57.09%, #4d5ef6 101.17%);
  width: auto;
  height: auto;
  gap: 0px;
  opacity: 0px;
  padding: 39px;
`
const DIVSTYLED = styled.div`
  display: flex;
  justify-content: space-between;
`
const H1STYLED = styled.h1`
  width: 101px;
  height: 19px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`
const LISTSTYLED = styled.li`
  list-style: none;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 6px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 26.63px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const TEXTSTYLED = styled.p`
  width: 403.66px;
  height: 16px;
  gap: 0px;
  opacity: 0px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 12px;
`
const DIVBUTTONSTYLED = styled.div`
  gap: 14px;
  display: flex;
`
const H2STYLED = styled.h2`
  width: 113px;
  height: 19px;
  gap: 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 18.75px;
  text-align: left;
  opacity: 0px;
  color: rgba(255, 255, 255, 1);
  margin-top: 21px;
`
const DIVIMGSTYLED = styled.div`
  display: flex;
  gap: 32px;
`
const DIVENDSTYLED = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px;
  margin: 0px;
`
const TSTYLED = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`
