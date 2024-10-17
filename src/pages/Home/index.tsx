import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/restaurant'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/pasta.png'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    image: sushi,
    rating: '4,9',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    image: pasta,
    rating: '4,6',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana']
  },
  {
    id: 3,
    image: pasta,
    rating: '4,6',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana']
  },
  {
    id: 4,
    image: sushi,
    rating: '4,9',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 5,
    image: sushi,
    rating: '4,9',
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    info: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 6,
    image: pasta,
    rating: '4,6',
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    info: ['Italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <ProductsList restaurants={restaurantes} />
  </>
)

export default Home
