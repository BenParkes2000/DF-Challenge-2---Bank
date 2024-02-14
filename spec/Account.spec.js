import Account from "../src/Account.js";

xdescribe("accessAccount tests", () => {
  it("should adjust accessible's value when correct user and pin is inputted", () => {
    // Arrange
    const testAccount = new Account("Ben", 1234);

    // Act
    testAccount.accessAccount("Ben", 1234);

    // Assert
    expect(testAccount.getAccessible()).toBe(true);
  });

  it("should not change accessible's value when an incorrect argument is used", () => {
    // Arrange
    const testAccount = new Account("Ben", 1234);

    // Act
    testAccount.accessAccount("Ben", null);

    // Assert
    expect(testAccount.getAccessible()).toBe(false);
  });
});

describe("Balance Tests", () => {
  let testAccount;
  // let Deposits;
  // Arrange
  beforeEach(() => {
    testAccount = new Account("Ben", 1234, 10);
  });

  describe("Deposit Tests", () => {
    xit("should update the balance value with the new value", () => {
      // Act
      testAccount.depositMoney(30);
      // Assert
      expect(testAccount.getBalance()).toBe(40);
    });

    xit("should leave the balance unchanged when nothing is deposited", () => {
      // Act
      testAccount.depositMoney();
      // Assert
      expect(testAccount.getBalance()).toBe(10);
    });

    xit("should not alter the balance when a negative value is given", () => {
      // Act
      testAccount.depositMoney(-10);
      // Assert
      expect(testAccount.getBalance()).toBe(10);
    });
  });

  xdescribe("Withdrawal Tests", () => {
    it("should update the balance value with the new value", () => {
      // Act
      testAccount.withdrawMoney(5);
      // Assert
      expect(testAccount.getBalance()).toBe(5);
    });

    it("should not allow withdrawals over the max balance", () => {
      // Act
      testAccount.withdrawMoney(15);
      // Assert
      expect(testAccount.getBalance()).toBe(10);
    });

    it("should allow withdrawals up to the max balance", () => {
      // Act
      testAccount.withdrawMoney(10);
      // Assert
      expect(testAccount.getBalance()).toBe(0);
    });

    it("should leave the balance unchanged when nothing is withdrawn", () => {
      // Act
      testAccount.withdrawMoney();
      // Assert
      expect(testAccount.getBalance()).toBe(10);
    });

    it("should not alter the balance when negative values are given", () => {
      // Act
      testAccount.withdrawMoney(-10);
      // Assert
      expect(testAccount.getBalance()).toBe(10);
    });
  });
});
