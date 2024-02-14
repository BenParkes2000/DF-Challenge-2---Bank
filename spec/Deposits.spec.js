import Deposits from "../src/Deposits.js";

describe("CreateTransaction Tests", () => {
  xit("should call the getDateOfTransaction method", () => {
    // Arrange
    const logSpy = spyOn(Deposits, `getDateOfTransaction`);
    // Act
    Deposits.createTransaction();
    // Assert
    expect(logSpy).toHaveBeenCalled();
  });

  it("should push 4 values to the first index of pastTransaction array", () => {
    // Act
    Deposits.createTransaction();
    // console.log(Deposits.transaction);
    // Assert
    expect(Deposits.pastTransactions[0].length).toEqual(4);
  });
});
