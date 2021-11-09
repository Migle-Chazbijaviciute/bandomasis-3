
class CarGridComponents {
  constructor() {
    this.state = {
      cars: [],
      loading: false,
    };
    this.init();
  }

  fetchCars = () => {
    this.state.loading = true;
    API.fetchCars(
      (cars) => {
        this.state.cars = cars;
        this.state.loading = false;
        this.render();
      },
      (err) => console.log(err)
    );
  }

  init = () => {
    this.fetchCars();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.className = ''
      this.htmlElement.innerHTML = `<div class="d-flex justify-content-center align-items-center"><img src="JS/assets/loading.gif"></div>
      `;
    } else {
      this.htmlElement.className = "row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-center"
      this.htmlElement.innerHTML = '';
      this.state.cars.forEach(cars => {
        const newCar = new CarCardComponent({
          data: cars,
        })
        this.htmlElement.appendChild(newCar.htmlElement);
      })
    }
  }

}
