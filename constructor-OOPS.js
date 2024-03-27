//Before introduce class  in ES6 use function

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now(); // Unique account number based on current timestamp
  this.balance = balance;

  this.addDeposit = function (amount) {
    this.balance += amount;
  };
  this.withdrawDeposit = function (amount) {
    this.balance -= amount;
  };
}

const accountHolder1 = new BankAccount("Ayushi khurana", 2000);
const accountHolder2 = new BankAccount("Akshat Khurana", 2500);

accountHolder1.addDeposit(5000); //add amount
accountHolder1.withdrawDeposit(1000); //subtract amount

i;

console.log(accountHolder1);
console.log(accountHolder2);
