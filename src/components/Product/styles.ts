import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.salmon};
  position: relative;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-right: 8px;
`
export const Rating = styled.div`
  display: flex;
`
export const Description = styled.p`
  padding: 16px 0 4px;
  font-size: 14px;
`
export const Container = styled.div`
  padding: 8px 8px 0;
`
export const Tags = styled.div`
  position: absolute;
  right: 8px;
  top: 16px;
`
export const Image = styled.img`
  width: 100%;
`
