import { createGlobalStyle } from 'styled-components'

export const colors = {
  sand: '#FFF8F2',
  beige: '#FFEBD9',
  salmon: '#E66767',
  white: '#FFF'
}

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
 }

 body {
  background-color: ${colors.sand};
  color: ${colors.salmon};
 }

 .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
 }
`
