// const User = require('../src/userIndividual');
// const userData = require('../data/users');

// const userDataSample1 = require('../data/userDataSample1');

class UserRepository {
  constructor(dataFilepath) {
    this.dataFilepath = require(dataFilepath);
  }

  findUserData(id) {
    var correctUser = this.dataFilepath.find(user => {
      if (user.id === id) {
        return user;
      }
      return correctUser;
    })
  } 

  averageStepGoal() {
  let userSteps = this.dataFilepath.map(user => {
    return user.dailyStepGoal
  });

  let totalSteps = userSteps.reduce((accum, curVal) => accum + curVal);
    return totalSteps / userSteps.length;
  }

  findMostState() {
    var states = this.dataFilepath.map(user => {
    return user.address.split(' ')[user.address.split(' ').length - 2];
  });
  var stateCount = states.reduce((acc, state) => {
    if (!acc.hasOwnProperty(state)) {
      acc[state] = 0;
    } else {
      acc[state] += 1;
    }
    return acc;
  }, {});
  let stateCounts = Object.values(stateCount);
  stateCounts.sort(function(a, b) {
    return b - a;
  });
  // stateCounts = Math.max(...stateCounts)
  console.log('hey girl', stateCounts)
  for (var state in stateCount) {
    if (stateCount[state] === stateCounts[0]) {
      return state
    }
  }
}
}

module.exports = UserRepository;