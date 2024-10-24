import star from '../../assets/images/star.png'
import * as S from './styles'
import ButtonSecondary from '../ButtonSecondary'
import Tag from '../Tag'

type Props = {
  image: string
  title: string
  rating: number
  description: string
  infos: string[]
}

const Product = ({ image, title, rating, description, infos }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <S.Tags>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Tags>
      <S.Image src={image} alt={title} />
      <S.Container>
        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <S.Rating>
            <S.Title>{rating}</S.Title>
            <img src={star} alt="estrela" />
          </S.Rating>
        </S.TitleContainer>
        <S.Description>{getDescricao(description)}</S.Description>
        <ButtonSecondary type="link" title="Saiba mais" to="/restaurante">
          Saiba mais
        </ButtonSecondary>
      </S.Container>
    </S.Card>
  )
}
export default Product
