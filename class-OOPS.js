/**'
 * Class introduce in ES6
 * Class doesn't supported hoisting in Javascrpt
 */
class BankAccount {
  customerName;
  accountNumber;
  balance;

  //constructor function
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now(); // Unique account number based on current timestamp
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const ayushiAcc = new BankAccount("Ayushi Khurana", 500);
ayushiAcc.deposit(700); // add amount
ayushiAcc.withdraw(100); //subtract amount

console.log(ayushiAcc);
