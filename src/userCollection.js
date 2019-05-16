class UserRepository {
  constructor(dataFilepath) {
    this.dataFilepath = require(dataFilepath);
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
    var statesAndCounts = states.reduce((acc, state) => {
      if (!acc.hasOwnProperty(state)) {
        acc[state] = 0;
      } else {
        acc[state] += 1;
      }
      return acc;
    }, {});
    this.findMostState(statesAndCounts)
    return statesAndCounts;
  }

  findMostState(stateObject) {
    const stateCounts = Object.values(stateObject);
    stateCounts.sort(function(a, b) {
      return b - a;
    });
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