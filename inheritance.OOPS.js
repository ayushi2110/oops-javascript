/**
 * DRY code write by using Inheritance
 * use super()  `super` is a keyword used in class constructors to call the constructor of a parent class
 */

class BankAccount {
  customerName;
  accoutnNumber;
  balance;

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accoutnNumber = Date.now(); // Unique account number based on current timestamp
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class currentAccount extends BankAccount {
  transactionLimit = 5000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBussinessLoan(amount) {
    console.log(`Taking Bussiness Loan ${amount}`);
  }
}

class savingAccount extends BankAccount {
  transactionLimit = 1000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log(`Taking Personal Loan ${amount}`);
  }
}

const ayushiAcc = new savingAccount("Ayushi Khurana", 5000);
ayushiAcc.deposit(100);
ayushiAcc.withdraw(300);

console.log(ayushiAcc);
