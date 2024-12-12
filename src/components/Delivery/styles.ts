import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
// import { colors } from '../../styles'
// import { ButtonContainer } from '../Button/styles'
// import trash from '../../assets/images/lixeira-de-reciclagem 1.png'

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: ${colors.black};
//   opacity: 0.8;
// `

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
      max-width: 155px;
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
  }
`
