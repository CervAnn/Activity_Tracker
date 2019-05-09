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

  isolateStates() {
    var states = this.dataFilepath.map(user => {
      return user.address.split(' ')[user.address.split(' ').length - 2];
    });
    this.countStates(states);
    return states;
  }

  countStates(states) {
    console.log('states', states);
    var statesAndCounts = states.reduce((acc, state) => {
      if (!acc.hasOwnProperty(state)) {
        acc[state] = 0;
      } else {
        acc[state] += 1;
      }
      return acc;
    }, {});
    console.log('object', statesAndCounts)
    this.findMostState(statesAndCounts)
    return statesAndCounts;
  }

  findMostState(stateObject) {
    // sort compare function for objects
    // var states = this.dataFilepath.map(user => {
    //   return user.address.split(' ')[user.address.split(' ').length - 2];
    // });
    // var statesAndCounts = states.reduce((acc, state) => {
    //   if (!acc.hasOwnProperty(state)) {
    //     acc[state] = 0;
    //   } else {
    //     acc[state] += 1;
    //   }
    //   return acc;
    // }, {});
    const stateCounts = Object.values(stateObject);
    stateCounts.sort(function(a, b) {
      return b - a;
    });
    // stateCounts = Math.max(...stateCounts)
    console.log('hey girl', stateCounts)
    for (var state in stateObject) {
      if (stateObject[state] === stateCounts[0]) {
        return state
      }
    }
  }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
  module.exports = UserRepository;
}