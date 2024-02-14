import Transactions from "./Transactions.js";

class Deposits extends Transactions {
  static createTransaction(value, balance) {
    let pushable = [];
    let decimalValue = Number(value).toFixed(2);
    let decimalBalance = Number(balance).toFixed(2);
    pushable.push(Deposits.getDateOfTransaction());
    pushable.push(decimalValue);
    pushable.push("      ");
    pushable.push(decimalBalance);
    Deposits.pushTransaction(pushable);
  }

  static pushTransaction(pushable) {
    Transactions.pastTransactions.unshift(pushable);
  }
}

export default Deposits;
