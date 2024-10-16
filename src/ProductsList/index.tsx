import Product from '../components/Product'
import { List } from './styles'

const ProductsList = () => (
  <div className="container">
    <List>
      <Product
        image="https://via.placeholder.com/472x217"
        title="Hioki Sushi"
        rating="4,9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        info={['Destaque da semana', 'Japonesa']}
      />
      <Product
        image="https://via.placeholder.com/472x217"
        title="Hioki Sushi"
        rating="4,9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        info={['Italiana']}
      />
      <Product
        image="https://via.placeholder.com/472x217"
        title="Hioki Sushi"
        rating="4,9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        info={['Destaque da semana', 'Japonesa']}
      />
      <Product
        image="https://via.placeholder.com/472x217"
        title="Hioki Sushi"
        rating="4,9"
        description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
        info={['Destaque da semana', 'Japonesa']}
      />
    </List>
  </div>
)

export default ProductsList
