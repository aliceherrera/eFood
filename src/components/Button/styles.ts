import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${colors.beige};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  display: block;
  width: 100%;
  margin: 8px 0;
  border: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.beige};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  display: block;
  width: 100%;
  margin: 8px 0;
  border: none;
  text-decoration: none;
  text-align: center;
`
