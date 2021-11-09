
class CarCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  createdCard = () => {
    const { brand, model, year, fuelTypes, price: { amount, currency }, imgSrc } = this.props.data;
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="border shadow">
    <button class="btn btn-sm btn-danger delete float-end">✕</button>
    <div class="h-100">
    <div class="card-body">
      <h3 class="card-title">${brand} ${model}</h3>
    </div>
    <img src="${imgSrc}" style="height: 300px" class="card-img-top" pb-3">
    <ul class="list-group">
    <li class="list-group-item"><b>Year:</b> ${year}</li>
    <li class="list-group-item"><b>Fuel Type:</b> ${fuelTypes}</li>
      <li class="list-group-item"><b>Price:</b> ${amount} ${currency}</li>
    </ul>
</div>
  </div>`

    return element;
  }

  init = () => {
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    this.htmlElement.appendChild(this.createdCard());
  }
}
