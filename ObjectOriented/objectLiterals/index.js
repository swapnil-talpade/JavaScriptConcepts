var userOne = {
  name: "swapnil",
  email: "swapnil@gmail.com",
  login() {
    console.log(this.email, " has logged in");
  },
  logout() {
    console.log(this.email, " has logged out");
  },
};

console.log(userOne);
