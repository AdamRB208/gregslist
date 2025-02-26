

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
          src="https://media.istockphoto.com/id/1248641162/photo/exterior-view-of-a-mid-century-modern-house.webp?a=1&b=1&s=612x612&w=0&k=20&c=KdHJtg2mfqHgnI-lXxVPhqFA9a-C9S-Phaeryr14_qg="
          alt=" image of newly renovated mid century modern home" class="house-img">
          <div class="p-3 flex-grow-1">
            <h3>Newly Renovated Mid Century Modern Home</h3>
            <div class="d-flex justify-content-between">
              <div>
                <p class="fs-2">$500000</p>
                <p class="fs-4">Sqft: 1400</p>
                <p class="fs-4">Year: 1974</p>
              </div>
              <div>
                <p class="fs-4">Bedrooms: 3</p>
                <p class="fs-4">Bathrooms: 2.5</p>
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