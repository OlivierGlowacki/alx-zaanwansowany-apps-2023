import { getApartment } from "./shared/apartments";
import getIdFromSearchParams from "./shared/helpers"

const form = document.querySelector("form");
const submitButton = document.querySelector("#submit");

const apartmentId = getIdFromSearchParams(window.location.search)

const renderApartment = (apartment) => {

    form.elements.title.value = apartment.title;
    form.elements.description.value = apartment.description;
    form.elements.price.value = apartment.price;
    form.elements.date.value = apartment.publication_date;
}

getApartment(apartmentId)
  .then(apartment => {
    renderApartment(apartment)
  })

const submitHandler = event => {
    event.preventDefault();
}

submitButton.addEventListener("submit", submitHandler);