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

  getAverageSleep(data, id) {
    const hoursSlept = data[id - 1].sleepData.map(object => {
      return object.hoursSlept;
    })
    const averageHoursSlept = hoursSlept.reduce((acc, hour) => {
      return acc += hour;
    }, 0)
    return Math.floor(averageHoursSlept / hoursSlept.length);
  }

  getAverageSleepQuality(data, id) {
    const sleepQuality = data[id - 1].sleepData.map(object => {
      return object.sleepQuality;
    })
    const averageSleepQuality = sleepQuality.reduce((acc, hour) => {
      return acc += hour;
    }, 0)
    return Math.floor(averageSleepQuality / sleepQuality.length);
  }

  getDateOfSleep(data, id, date) {
    return data[id - 1].sleepData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
  }

  getHoursSleptOfDay(object) {
    return object.hoursSlept;
  }

  getSleepQualityOfDay(object) {
    return object.sleepQuality;
  }

  getWeekPrecedingDate(data, id, date) {
    const sleepData = data[id - 1].sleepData;
    const day = sleepData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
    const week = data.reduce((acc, obj, index, array) => {
      const indexOfDay = array.indexOf(day);
      return data.slice((indexOfDay - 7), indexOfDay)
    }, {})
    return week;
  }

  getSleepOfWeek(data, id, date) {
    const sleepData = data[id - 1].sleepData;
    const day = sleepData.find(obj => obj.date === date);
    const week = sleepData.reduce((acc, obj, index, array) => {
      const indexOfDay = array.indexOf(day);
      const weekOfSleep = sleepData.slice((indexOfDay - 7), indexOfDay)
      const sleepWeekObject = weekOfSleep.reduce((acc, obj, index, array) => {
        acc[obj.date] = obj.hoursSlept;
        return acc;
      }, {})
      return sleepWeekObject;
    }, {})
    return week;
  }

  parseSleepOfWeek(weekObject) {
    const dates = Object.keys(weekObject);
    const sleep = Object.values(weekObject);
    return `
      <p class="info-text">${dates[0]}: ${sleep[0]}</p> 
      <p class="info-text">${dates[1]}: ${sleep[1]}</p> 
      <p class="info-text">${dates[2]}: ${sleep[2]}</p> 
      <p class="info-text">${dates[3]}: ${sleep[3]}</p> 
      <p class="info-text">${dates[4]}: ${sleep[4]}</p> 
      <p class="info-text">${dates[5]}: ${sleep[5]}</p> 
      <p class="info-text">${dates[6]}: ${sleep[6]}</p>`
  }

  getSleepQualityOfWeek(week) {
    const sleepObject = week.reduce((acc, day) => {
      acc[day.date] = day.sleepQuality;
      return acc;
    }, {})
    return sleepObject;
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = User;
}