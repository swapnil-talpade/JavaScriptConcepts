class UserInfo {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  login() {
    console.log(this.name, " is logged in");
  }
  logout() {
    console.log(this.name, " is logged out");
  }
}

const userOne = new UserInfo("swapnil", 22, "swapnil@gmail.com");
const userTwo = new UserInfo("harshal", 20, "harshal@gmail.com");

userOne.login();
console.table(userOne);
userOne.logout();
userTwo.login();
console.table(userTwo);
userTwo.logout();
