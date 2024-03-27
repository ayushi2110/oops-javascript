/**
 * # symbol before a field or method name indicates that it is a private field or method.
 */
class BankAccount {
  customerName;
  accountNumber;
  #balance;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now(); // Unique account number based on current timestamp
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (this.#balance < amount) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }

  set finalAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(" Amount is not valid input");
    }
    this.#balance = amount;
  }

  get finalAmount() {
    return this.#balance;
  }
}

class currentAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }
  takeBussinessLoan(amount) {
    console.log(`Take Bussiness loan ${amount}`);
  }
}

const ayushiAcc = new currentAccount("Ayushi Khurana", 500);
ayushiAcc.finalAmount = 1200;
console.log(ayushiAcc.finalAmount);
