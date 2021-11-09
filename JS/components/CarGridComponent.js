
class CarGridComponents {
  constructor() {
    this.state = {
      cars: [],
      loading: false,
    };
    this.init();
  }

  init = () => {
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
