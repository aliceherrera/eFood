class Restaurant {
  id: number
  image: string
  title: string
  rating: string
  description: string
  info: string[]

  constructor(
    id: number,
    image: string,
    title: string,
    rating: string,
    description: string,
    info: string[]
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.rating = rating
    this.description = description
    this.info = info
  }
}

export default Restaurant
