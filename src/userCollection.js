const User = require('../src/userIndividual');
const userData = require('../data/users');

const userDataSample1 = require('../data/userDataSample1');

class UserRepository {
    constructor(dataFilepath) {
      this.dataFilepath = require(dataFilepath);
    }

    findUserData(id) {
      // console.log('hey', this.dataFilepath)
      this.dataFilepath.forEach(user => {
        if (user.id === id) {
          // console.log('woah', user)
          return user;
        }
      })
    }
}

module.exports = UserRepository;