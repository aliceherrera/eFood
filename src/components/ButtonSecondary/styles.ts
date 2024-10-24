import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Secondary = styled(ButtonLink)`
  background-color: ${colors.salmon};
  color: ${colors.beige};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  width: auto;
  text-decoration: none;
`
