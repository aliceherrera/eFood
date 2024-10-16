import Button from './components/Button'
import ButtonSecondary from './components/ButtonSecondary'
import Header from './components/Header'
import Tag from './components/Tag'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Tag>teste da tag</Tag>
      <Button type="button" title="teste botão">
        Nome do botão
      </Button>
      <ButtonSecondary type="button" title="teste botão secundario">
        Nome do outro botão
      </ButtonSecondary>
    </>
  )
}

export default App
