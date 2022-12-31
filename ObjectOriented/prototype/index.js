function UserInfo(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

UserInfo.prototype.login = function () {
  this.online = true;
  console.log(this.email + " is currently logged in");
};

UserInfo.prototype.logout = function () {
  this.online = false;
  console.log(this.email + " is currently logged out");
};

const userOne = new UserInfo("swapnil", 22, "swapnil@gmail.com");
const userTwo = new UserInfo("harshal", 20, "harshal@gmail.com");

console.log(userOne);
userTwo.login();
console.log(userTwo);
userTwo.logout();
console.log(userTwo);
