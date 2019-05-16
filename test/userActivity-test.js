const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/userDataSample1');
const activityData = require('../data/activitySample');
const userActivity = require('../src/userActivity');


describe('userActivity', function() {

  it('should be a function', function() {
    expect(userActivity).to.be.a('function');
  });

  it('should return miles walks based on steps for a given day', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.walkedMilesUser(activityData, userData, 1, "06/05/2019")).to.deep.equal(6.56)
  })

  it('should return minutes active for a user on a given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.activeMinutesUser(activityData, 1, "15/05/2019")).to.deep.equal(228)
  })

  it('should determine if a user reached their step goal on a given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.determineIfReachedStepGoalForDay(activityData, 1, "15/05/2019")).to.deep.equal(true)
  })
});