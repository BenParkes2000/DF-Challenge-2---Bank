class Account {
  #name;
  #pin;
  #balance;
  #accessible = false;

  constructor(name, pin, balance = 0) {
    this.#name = name;
    this.#pin = pin;
    this.#balance = balance;
  }

  accessAccount(name, pin) {
    if (this.#name === name && this.#pin === pin) this.#accessible = true;
  }

  getName() {
    return this.#name;
  }

  getAccessible() {
    return this.#accessible;
  }

  getBalance() {
    return this.#balance;
  }

  depositMoney(value) {
    if (!value || value < 0) {
      console.log("Incorrect Value\nPlease try again.");
      return false;
    } else {
      this.#balance += value;
      return true;
    }
  }

  withdrawMoney(value) {
    if (!value || value < 0) {
      console.log("Incorrect value.\nPlease try again.");
      return false;
    } else if (value > this.#balance) {
      console.log("Insufficient funds.\nPlease try again.");
      return false;
    } else {
      this.#balance -= value;
      return true;
    }
  }
}

export default Account;
