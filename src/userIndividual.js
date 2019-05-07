class User {
  constructor(userData) {
    this.userData = userData;
  }
  returnFirstName() {
   let userName = this.userData.name.split(" ")
   return userName[0];
  }
}

module.exports = User;
