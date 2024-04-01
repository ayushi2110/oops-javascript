/**
 * the `static in JavaScript is used to create methods and properties that belong to the class itself, rather than to instances of the class
 * */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static sortByAge(user1, user2) {
    return user1.age - user2.age;
  }
}

const user1 = new User("Ayushi", 26);
const user2 = new User("Sakshi", 28);
const user3 = new User("Khushi", 16);

const users = [user1, user2, user3];

users.sort(User.sortByAge);

console.log(users);
