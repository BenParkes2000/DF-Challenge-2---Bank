import Transactions from "../src/Transactions.js";

describe("Date String Tests", () => {
  xit("should add one to the month", () => {
    // Arrange
    let month;
    // Act
    month = Transactions.monthManipulation(0);
    // Assert
    expect(month).toBe(1);
  });

  xit("should have the correct 2 digit format", () => {
    // Arrange
    let month;
    // Act
    month = Transactions.monthManipulation(3);
    // Assert
    expect(month).toBe("04");
  });

  xit("should call the monthManipulation when getDateOfTransaction method is called", () => {
    // Arrange
    const logSpy = spyOn(Transactions, `monthManipulation`);
    // Act
    Transactions.getDateOfTransaction();
    // Assert
    expect(logSpy).toHaveBeenCalled();
  });

  xit("should call the dateManipulation when getDateOfTransaction method is called", () => {
    // Arrange
    const logSpy = spyOn(Transactions, `dateManipulation`);
    // Act
    Transactions.getDateOfTransaction();
    // Assert
    expect(logSpy).toHaveBeenCalled();
  });

  xit("should return the date in the format DD/MM/YYYY when dateManipulation is called", () => {
    // Arrange
    let date;
    // Act
    date = Transactions.dateManipulation(29, "01", 2024);
    // Assert
    expect(date).toBe("29/01/2024");
  });
});

describe("Print Bank Statement test", () => {
  it("should console.log each transaction", () => {
    // Arrange
    const logSpy = spyOn(console, `log`);
    Transactions.pastTransactions = [
      [0, 1, 2, 3],
      [5, 6, 7, 8],
    ];
    // Act
    Transactions.printStatement();
    // Assert
    expect(logSpy).toHaveBeenCalledTimes(3);
  });
});
