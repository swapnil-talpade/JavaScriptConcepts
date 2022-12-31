function UserInfo(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.online = false;
}

UserInfo.prototype.login = function () {
  this.online = true;
  console.log(this.email + " is currently logged in");
};

UserInfo.prototype.logout = function () {
  this.online = false;
  console.log(this.email + " is currently logged out");
};

function Admin(...args) {
  UserInfo.apply(this, args);
  this.role = "superadmin";
}

Admin.prototype = Object.create(UserInfo.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => user.name !== u.name);
  console.log(users);
};

const userOne = new UserInfo("swapnil", 22, "swapnil@gmail.com");
const userTwo = new UserInfo("harshal", 20, "harshal@gmail.com");
const userThree = new UserInfo("rahul", 20, "rahul@gmail.com");
const admin = new Admin("sahil", 24, "sahil@gmail.com");

let users = [userOne, userTwo, userThree, admin];

console.log(admin);
console.log(admin.login());
console.log(users);
console.log(admin.deleteUser(userThree));
console.log(users);
