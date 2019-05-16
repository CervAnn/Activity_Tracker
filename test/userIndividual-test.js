const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');
const userData = require('../data/userDataSample1');
const hydrationData = require('../data/hydrationSample');
const sleepData = require('../data/sleepSample');

describe('User', function() {

  it('should be a function', function() {
  expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User(userData);
    expect(user).to.be.an.instanceof(User)
  });

  it('should return first name of a user', function() {
    const user = new User(userData, 1);
    user.returnFirstName();
    expect(user.returnFirstName()).to.equal('Nyasia');
  });

  it('should return User data based on User ID', function() {
    const user = new User(userData);
  expect(user.findUserData(userData, 1)).to.equal(userData[0]);
  })

  it('should compare individual step goal to all user step goals', function() {
    const user = new User(userData, 1);
    expect(user.compareStepGoal(userData, 1)).to.equal(`Your daily step goal is 6035 more than the average user.`)
  });
});