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
    const fluidObject = data[id - 1].hydrationData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
    return fluidObject.numOunces;
  }

  getFluidsOfWeek(data, id, date) {
    const fluidData = data[id - 1].hydrationData;
    const fluidObject = fluidData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
    const fluidWeek = fluidData.reduce((acc, obj, index, array) => {
      const theIndex = array.indexOf(fluidObject);
      const newArray = fluidData.slice(theIndex, (theIndex + 7))
      const ourObject = newArray.reduce((acc, obj) => {
        acc[obj.date] = obj.numOunces;
        return acc;
      }, {})
      return ourObject;
    }, {})
    this.parseFluidsOfWeek(fluidWeek);
    return fluidWeek;
  }

  parseFluidsOfWeek(weekObject) {
    const dates = Object.keys(weekObject);
    const fluids = Object.values(weekObject);
    return `
      <p class="info-text">${dates[0]}: ${fluids[0]}</p> 
      <p class="info-text">${dates[1]}: ${fluids[1]}</p> 
      <p class="info-text">${dates[2]}: ${fluids[2]}</p> 
      <p class="info-text">${dates[3]}: ${fluids[3]}</p> 
      <p class="info-text">${dates[4]}: ${fluids[4]}</p> 
      <p class="info-text">${dates[5]}: ${fluids[5]}</p> 
      <p class="info-text">${dates[6]}: ${fluids[6]}</p>`
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}