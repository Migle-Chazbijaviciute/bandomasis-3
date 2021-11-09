const baseUrl = "http://localhost:3000";

class API {
  static fetchCars = (resolve, reject) => {
    fetch(baseUrl + '/cars')
      .then(data => data.json())
      .then(resolve)
      .catch(reject);

  }

  static deleteCar = (resolve, reject, id) => {
    fetch(`${baseUrl}/cars/${id}`, { method: 'DELETE' })
      .then(resolve)
      .catch(reject)
  }
}

// API.fetchCars(
//   (data) => console.log('Got these cars:', data),
//   (reject) => console.error('Error', reject)
// )

// API.deleteCar(
//   (data) => console.log('Car deleted', data),
//   (reject) => console.error('Error', reject), '7'
// )
