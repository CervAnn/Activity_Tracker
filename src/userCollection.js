const User = require('../src/userIndividual');
const userData = require('../data/users');

const userDataSample1 = require('../data/userDataSample1');

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
}

module.exports = UserRepository;