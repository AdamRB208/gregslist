

export class Houses {

  constructor(data) {
    this.id = data.id
    this.year = data.year
    this.bedrooms = data.bedroom
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
}