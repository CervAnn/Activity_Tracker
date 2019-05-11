class User {
  constructor(userData) {
    this.userData = userData;
    // this.userData = userData[Math.floor(Math.random()*userData.length)]
  }

  returnFirstName(id) {
    let userId = id - 1;
   let userName = this.userData[id - 1].name.split(" ");
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
    if (this.userData[id - 1].dailyStepGoal > averageStepGoal) {
      return `Your daily step goal is ${this.userData[id - 1].dailyStepGoal - averageStepGoal} more than the average user.`;
    } else {
      return `Your daily step goal is ${averageStepGoal - this.userData[id - 1].dailyStepGoal} less than the average user.`;
    }
  }
  getAverageFluids(data, id) {
    const numOunces = data[id - 1].hydrationData.map(object => {
      return object.numOunces;
    })
    const averageOunces = numOunces.reduce((acc, oz) => {
      return acc += oz;
    }, 0)
    return Math.floor(averageOunces / numOunces.length);
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}