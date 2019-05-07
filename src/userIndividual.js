class User {
  constructor(userData) {
    this.userData = userData;
  }
  returnFirstName(name) {
   let userName = this.userData.name.split(" ")
   return userName[0];
}
}

module.exports = User;
