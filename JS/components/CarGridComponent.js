
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
      this.htmlElement.innerHTML = 'Loading';
    } else {
      this.htmlElement.innerHTML = 'Successfully loaded data!';
    }
  }

}
