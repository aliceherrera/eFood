import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import trash from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0;
  width: 360px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const CartItem = styled.li`
  background-color: ${colors.beige};
  margin-bottom: 16px;
  display: flex;
  padding: 8px 8px 12px;
  position: relative;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${trash});
    height: 16px;
    width: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 8px;
    bottom: 8px;
    cursor: pointer;
  }
`

export const Price = styled.p`
  color: ${colors.beige};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 24px 0 8px;
`
