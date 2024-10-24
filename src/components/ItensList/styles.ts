import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0;
`
export const Modal = styled.div`
  display: none;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  background-color: ${colors.salmon};
  color: ${colors.white};
  /* align-items: center;
  justify-content: center; */
  position: fixed;
  top: 280px;
  left: 0;
  right: 0;

  &.visivel {
    display: flex;
  }
`

export const ModalContent = styled.div`
  display: flex;

  > img {
    max-width: 280px;
    width: 100%;
    max-height: 280px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
  }
  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
  }
`
export const Infos = styled.div`
  margin-left: 24px;
`
export const Close = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;
`
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`
