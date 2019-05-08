class User {
  constructor(userData) {
    this.userData = userData[0];
  }
  returnFirstName() {
    console.log(this.userData)
   let userName = this.userData.name.split(" ")
   return userName[0];
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}
