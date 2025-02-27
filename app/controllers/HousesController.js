import { AppState } from "../AppState.js";


export class HousesController {
  constructor() {
    this.drawHouses()
    AppState.on('houses', this.drawHouses)

  }

  drawHouses() {

    console.log('houses drawn')
    const houses = AppState.houses

    let housesCardsContent = ''

    houses.forEach(house => housesCardsContent += house.housesCardHTMLTemplate)

    const houseListingElem = document.getElementById('housesListings')

    houseListingElem.innerHTML = housesCardsContent

  }

  createHouseListing() {
    event.preventDefault()
    let form = event.target
    let houseData = {

    }
  }
}

// createHouseListing() goes here