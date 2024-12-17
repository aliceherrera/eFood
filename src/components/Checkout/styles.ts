import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: ${colors.black}; */
  /* opacity: 0.8; */
`

export const CartContainer = styled.form`
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
  padding: 24px 8px 0;
  width: 360px;

  h2 {
    color: ${colors.beige};
    font-size: 16px;
    margin-bottom: 8px;
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin: 4px 0;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    margin: 16px 0;
    color: ${colors.beige};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0 20px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.beige};

  .display-block {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  input {
    background-color: ${colors.beige};
    height: 32px;
    border: 1px solid ${colors.beige};
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px;
    font-weight: bold;
    color: ${colors.gray};

    &.error {
      border: 2px solid red;
    }
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  max-width: ${(props) => props.maxWidth || '155px'};
  width: 100%;
`
