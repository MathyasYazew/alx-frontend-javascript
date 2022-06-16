// eslint-disable-next-line
import Currency from "./3-currency";



  // amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
