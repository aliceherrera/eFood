import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.salmon};
  z-index: 1;
  padding: 32px 8px 0;
  width: 360px;
  color: ${colors.beige};

  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    margin: 16px 0;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin: 4px 0;
  }
`
