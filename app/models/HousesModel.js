

export class House {

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

  get housesCardHTMLTemplate() {
    return `
    <div class="col-12">
      <div class="shadow bg-light d-flex mb-4">
        <img
          src="${this.imgUrl}"
          alt=" image of forsale home" class="house-img">
          <div class="p-3 flex-grow-1">
            <h3>${this.description}</h3>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fs-2">$${this.price}</p>
                <p class="fs-4">Sqft: ${this.sqft}</p>
                <p class="fs-4">Year: ${this.year}</p>
              </div>
              <div>
                <p class="fs-4">Bedrooms: ${this.bedrooms}</p>
                <p class="fs-4">Bathrooms: ${this.bathrooms}</p>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <ul>description</ul>
                <ul>link to image</ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    `
  }

}