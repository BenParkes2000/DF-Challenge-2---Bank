import Transactions from "./Transactions.js";

class Withdrawals extends Transactions {
  static createTransaction(value, balance) {
    let pushable = [];
    let decimalValue = Number(value).toFixed(2);
    let decimalBalance = Number(balance).toFixed(2);
    pushable.push(Withdrawals.getDateOfTransaction());
    pushable.push("       ");
    pushable.push(decimalValue);
    pushable.push(decimalBalance);
    Withdrawals.pushTransaction(pushable);
  }

  static pushTransaction(pushable) {
    Transactions.pastTransactions.unshift(pushable);
  }
}

export default Withdrawals;
