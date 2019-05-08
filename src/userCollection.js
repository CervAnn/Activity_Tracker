// const User = require('../src/userIndividual');
// const userData = require('../data/users');

// const userDataSample1 = require('../data/userDataSample1');

class UserRepository {
    constructor(dataFilepath) {
      this.dataFilepath = require(dataFilepath);
    }

    findUserData(id) {
      this.dataFilepath.filter(user => {
        if (user.id === id) {
          return user;
        }
      })
    }

    averageStepGoal() {
    let userSteps = this.dataFilepath.map(user => {
        return user.dailyStepGoal
      });

    let totalSteps = userSteps.reduce((accum, curVal) => accum + curVal);
      return totalSteps / userSteps.length;
    }
}

module.exports = UserRepository;