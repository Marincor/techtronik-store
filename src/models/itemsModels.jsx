export default class ItemModels {
  _name;
  _price;
  _img;
  _amount;
  _id;
  _total

  constructor(name, price, img, id) {
    this._name = name;
    this._price = price;
    this._img = img;
    this._amount = 1;
    this._id = Math.round(Math.random()*12545);
    this._total = this._amount * this._price;
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


  increaseAmount() {

    this._amount += 1;
  }

  decreaseAmount() {

    this._amount -= 1;
  }


}

