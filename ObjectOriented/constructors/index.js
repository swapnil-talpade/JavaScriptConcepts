function UserInfo(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.online = false;
  this.login = function () {
    console.log(this.email + " has logged in");
  };
}

const userOne = new UserInfo("swapnil", 22, "swapnil@gmail.com");
const userTwo = new UserInfo("harshal", 20, "harshal@gmail.com");

console.log(userOne);
userTwo.login();
