import Account from "./Account.js";
import Deposits from "./Deposits.js";
import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import Withdrawals from "./Withdrawals.js";
import Transactions from "./Transactions.js";

const prompt = readline.createInterface({ input, output });

const BenAccount = new Account("Ben", 1234, 50);

const mainMenuInput = function (account) {
  console.log(
    `---------------------------\nWelcome ${account.getName()}.\nYour balance is : £${account.getBalance()}.\nYour options are 'Deposit', 'Withdraw', 'Print Statement' and "Log-out".`
  );
  prompt.question("Please enter your input: ", (inp) => {
    console.log(`You have chosen to: ${inp}`);
    mainMenu(inp, account);
  });
};

const mainMenu = function (inp, account) {
  switch (inp) {
    case "Deposit":
      prompt.question("Please enter your amount: £", (value) => {
        value = Number(value);
        if (account.depositMoney(value))
          Deposits.createTransaction(value, account.getBalance());
        balanceReturner(account);
      });
      break;
    case "Withdraw":
      prompt.question("Please enter your amount: £", (value) => {
        value = Number(value);
        if (account.withdrawMoney(value))
          Withdrawals.createTransaction(value, account.getBalance());
        balanceReturner(account);
      });
      break;
    case "Print Statement":
      Transactions.printStatement();
      balanceReturner(account);
      break;

    case "Log-out":
      console.log("Thank you for using this app!");
      prompt.close();
      break;
    default:
      console.log("Please enter a valid option\n");
      mainMenuInput(account);
  }
};

const balanceReturner = function (account) {
  console.log(`Your balance is £${account.getBalance()}.`);
  console.log("Returning to main menu...\n");
  mainMenuInput(account);
};

mainMenuInput(BenAccount);
