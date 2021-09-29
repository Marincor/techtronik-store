export default class ItemModels {
  _name;
  _price;
  _img;
  _amount;

  constructor(name, price, img) {
    this._name = name;
    this._price = price;
    this._img = img;
    this._amount = 0;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }
  get img() {
    return this._img;
  }

  get amount() {
    return this._amount;
  }

  increaseAmount() {
    this._amount += 1;
  }
}

