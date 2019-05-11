const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');
const userSample = require('../data/UserSample');
const longUserData = require('../data/userDataSample1');
const hydrationData = require('../data/hydrationSample');

describe('User', function() {

  it('should be a function', function() {
  expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User(longUserData);
    expect(user).to.be.an.instanceof(User)
  });

  it('should return first name of the name property of mockUserData', function() {
    const user = new User(longUserData);
    user.returnFirstName(1);
    expect(user.returnFirstName(1)).to.equal('Nyasia');
  });

  it('should return User data based on User ID', function() {
    const user = new User(longUserData);
  expect(user.findUserData(longUserData, 1)).to.equal(longUserData[0]);
  })

  it('should compare individual step goal to all user step goals', function() {
    const user = new User(longUserData);
    expect(user.compareStepGoal(longUserData, 1)).to.equal(`Your daily step goal is 6035 more than the average user.`)
  });

  it('should calculate the average amount of fluids they consume per day', function() {
    const user = new User(longUserData);
    expect(user.getAverageFluids(hydrationData, 1)).to.equal(55)
  })
});