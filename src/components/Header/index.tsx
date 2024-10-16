import logo from '../../assets/images/logo.png'
import * as S from './styles'
import fundo from '../../assets/images/fundo.png'

const Header = () => (
  <div style={{ backgroundImage: `url(${fundo})` }}>
    <S.TitleContainer>
      <img src={logo} alt="efood" />
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.TitleContainer>
  </div>
)

export default Header
