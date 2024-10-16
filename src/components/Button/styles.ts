import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.beige};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  display: block;
  width: 100%;
  margin: 8px;
  border: none;
`

//not working
// export const ButtonLink = styled(Link)`
//   background-color: ${colors.salmon};
//   color: ${colors.beige};
//   font-size: 14px;
//   font-weight: 700;
//   padding: 4px 6px;
//   display: inline-block;
// `
