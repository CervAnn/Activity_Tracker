class User {
  constructor(userData, id) {
    // this.userData = userData;
    // this.userData = userData[Math.floor(Math.random()*userData.length)]
    this.userData = userData[id - 1]

  }

  returnFirstName() {
   let userName = this.userData.name.split(" ");
   // let userName = this.userData.name.split(" ");
   return userName[0];
  }

  findUserData(data, id) {
    var correctUser = data.find(user => user.id === id);
    return correctUser;
  } 

  compareStepGoal(data, id) {
    var goals = data.map(user => {
      return user.dailyStepGoal;
    });
    var averageStepGoal = goals.reduce((acc, goal) => {
      return Math.floor((acc += goal) / 5);
    }, 0);
    if (this.userData.dailyStepGoal > averageStepGoal) {
      return `Your daily step goal is ${this.userData.dailyStepGoal - averageStepGoal} more than the average user.`;
    } else {
      return `Your daily step goal is ${averageStepGoal - this.userData.dailyStepGoal} less than the average user.`;
    }
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}