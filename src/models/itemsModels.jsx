export default class ItemModels {
  _name;
  _price;
  _img;
  _amount;
  _id;
  _total

  constructor(name, price, img) {
    this._name = name;
    this._price = price;
    this._img = img;
    this._amount = 1;
    this._id = Math.round(Math.random()*25);
    this._total = price;
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

  get total () {

    return this._total
  }
}

