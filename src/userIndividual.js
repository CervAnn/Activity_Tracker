class User {
  constructor(userData) {
    this.userData = userData;
    // this.userData = userData[Math.floor(Math.random()*userData.length)]
  }

  returnFirstName(id) {
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

  getFluidsOfDay(data, id, date) {
    const fluidObject = data[id - 1].hydrationData.find(obj => obj.date === date);
    return fluidObject.numOunces;
  }

  getFluidsOfWeek(data, id, date) {
    const fluidData = data[id - 1].hydrationData;
    const fluidObject = fluidData.find(obj => obj.date === date);
    const fluidWeek = fluidData.reduce((acc, obj, index, array) => {
      const theIndex = array.indexOf(fluidObject);
      const newArray = fluidData.slice(theIndex, (theIndex + 7))
      const ourObject = newArray.reduce((acc, obj) => {
        acc[obj.date] = obj.numOunces;
        return acc;
      }, {})
      return ourObject;
    }, {})
    return fluidWeek;
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}