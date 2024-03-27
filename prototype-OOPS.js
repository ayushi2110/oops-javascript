/**JavaScript's prototype-based inheritance mechanism, allowing properties and 
methods defined on a prototype to be accessible by objects that inherit from that prototype*/

function BankAccount(customerName, balance = 0) {
  this.accountNumber = customerName;
  this.accountNumber = Date.now(); // Unique account number based on current timestamp
  this.balance = balance;
}

const AmitAccount = new BankAccount("Amit", 500);

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
AmitAccount.deposit(1200); // Add in Balance

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
AmitAccount.withdraw(200); //Withdraw from total Amount

console.log(AmitAccount);
