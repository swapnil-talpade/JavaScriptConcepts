class UserInfo {
  name;
  age;
  email;
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const userOne = new UserInfo("swapnil", 22, "swapnil@gmail.com");
const userTwo = new UserInfo("harshal", 20, "harshal@gmail.com");

console.log(userOne);
console.log(userTwo);
