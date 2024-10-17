import logo from '../../assets/images/logo.png'
import * as S from './styles'
import fundo from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <div style={{ backgroundImage: `url(${fundo})` }}>
    <S.TitleContainer>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
    </S.TitleContainer>
  </div>
)

export default Header
