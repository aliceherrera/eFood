import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: ${colors.salmon};
  color: ${colors.beige};
  display: inline-block;
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
`
