import { Container } from '../Product/styles'

type Props = {
  children: JSX.Element
  title: string
}

const Sidebar = ({ children, title }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Sidebar
