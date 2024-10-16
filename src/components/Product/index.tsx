import star from '../../assets/images/star.png'
import * as S from './styles'
import ButtonSecondary from '../ButtonSecondary'
import Tag from '../Tag'

type Props = {
  image: string
  title: string
  rating: string
  description: string
  info: string[]
}

const Product = ({ image, title, rating, description, info }: Props) => (
  <S.Card>
    <S.Tags>
      {info.map((info) => (
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
      <S.Description>{description}</S.Description>
    </S.Container>
    <ButtonSecondary type="button" title="Saiba mais">
      Saiba mais
    </ButtonSecondary>
  </S.Card>
)
export default Product
