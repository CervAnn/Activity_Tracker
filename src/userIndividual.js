class User {
  constructor(userData) {
    this.userData = userData[0]
    // this.userData = userData[Math.floor(Math.random()*userData.length)]
  }

  returnFirstName() {
   let userName = this.userData.name.split(" ")
   return userName[0];
  }

  compareStepGoal(data) {
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
  getAverageFluids() {
    console.log('feafe', this.userData.id)
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}