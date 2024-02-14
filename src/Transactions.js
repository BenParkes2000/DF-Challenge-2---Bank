class Transactions {
  static pastTransactions = [
    ["14/01/2012", "       ", "500.00", "2500.00"],
    ["13/01/2012", "2000.00", "      ", "3000.00"],
    ["10/01/2012", "1000.00", "      ", "1000.00"],
  ];

  static getDateOfTransaction() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let newMonth = Transactions.monthManipulation(month);
    return Transactions.dateManipulation(day, newMonth, year);
  }

  static monthManipulation(month) {
    let numMonth = Number(month);
    numMonth++;
    if (numMonth < 10) numMonth = `0${numMonth}`;
    return String(numMonth);
  }

  static dateManipulation(day, month, year) {
    let dateString = `${day}/${month}/${year}`;
    return dateString;
  }

  static printStatement() {
    console.log(`date       || credit  || debit  || balance`);
    Transactions.pastTransactions.forEach((transaction) => {
      console.log(
        `${transaction[0]} || ${transaction[1]} || ${transaction[2]} || ${transaction[3]}`
      );
    });
  }
}
export default Transactions;
