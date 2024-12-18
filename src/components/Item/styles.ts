import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding: 56px 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.li`
  max-width: 320px;
  width: 100%;
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: inline-block;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 425px;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 900;
  padding: 8px 0;
`
export const Description = styled.p`
  font-size: 14px;
`
export const Container = styled.div`
  padding: 8px 8px 0;
`
export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`
export const Modal = styled.div`
  display: flex;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  background-color: ${colors.salmon};
  color: ${colors.white};
  position: fixed;
  top: 280px;
  left: 0;
  right: 0;

  @media (max-width: ${breakpoints.desktop}) {
    width: 90%;
  }
`

export const ModalContent = styled.div`
  display: flex;

  > img {
    width: 280px;
    height: 280px;
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    > img {
      max-width: 400px;
      width: 100%;
      object-fit: cover;
      margin-bottom: 16px;
    }
  }
`
export const Infos = styled.div`
  margin-left: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }
`
export const Close = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
export const ContainerModal = styled.div`
  position: fixed;
  display: none;

  &.visivel {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.8;
`
