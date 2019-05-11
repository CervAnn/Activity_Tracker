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
    user.returnFirstName();
    expect(user.returnFirstName()).to.equal('Nyasia');
  });

  it('should compare individual step goal to all user step goals', function() {
    const user = new User(longUserData);
    expect(user.compareStepGoal(longUserData)).to.equal(`Your daily step goal is 6035 more than the average user.`)
  });

  it('should calculate the average amount of fluids they consume per day', function() {
    const user = new User(longUserData);
    expect(user.getAverageFluids().to.equal(64))
  })
});