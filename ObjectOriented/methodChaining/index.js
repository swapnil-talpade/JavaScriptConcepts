class UserInfo {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(this.name, " is logged in");
    return this;
  }
  logout() {
    console.log(this.name, " is logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.name, " has a score of ", this.score);
    return this;
  }
}

const userOne = new UserInfo("swapnil", 22, "swapnil@gmail.com");
const userTwo = new UserInfo("harshal", 20, "harshal@gmail.com");

// for method chaining to work return this after every method
userOne.login().updateScore().updateScore().updateScore().logout();
userTwo.login().updateScore().updateScore().logout();
