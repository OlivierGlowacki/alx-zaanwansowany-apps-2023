export const getApartments = () => {
  return fetch('http://localhost:8000/apartments')
    .then(response => response.json())
}

export const getApartment = (id) => {
  return fetch(`http://localhost:8000/apartments/${id}`)
    .then(res => res.json())
}