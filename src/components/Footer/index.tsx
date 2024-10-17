import logo from '../../assets/images/logo.png'
import * as S from './styles'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'

const Footer = () => (
  <S.Footer>
    <S.Container>
      <img src={logo} alt="efood" />
      <S.Redes>
        <a href="//instagram.com">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="//facebook.com">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="//twitter.com">
          <img src={twitter} alt="twitter" />
        </a>
      </S.Redes>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.Container>
  </S.Footer>
)

export default Footer
