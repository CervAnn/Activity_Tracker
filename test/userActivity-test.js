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
    expect(userTrek.walkedMilesUser(activityData, userData, 1, "06/05/2019")).to.equal(6.56)
  })

  it('should return minutes active for a user on a given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.activeMinutesUser(activityData, 1, "15/05/2019")).to.equal(228)
  })

  it('should determine if a user reached their step goal on a given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.determineIfReachedStepGoalForDay(activityData, 1, "15/05/2019")).to.equal(true)
  })

   it('should find dates a user exceeded their step goal', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.findDaysUserExceedsStepGoal(activityData, 1, "15/05/2019")).to.deep.equal([ '10/05/2019',
  '12/05/2019',
  '15/05/2019',
  '16/05/2019',
  '18/05/2019',
  '19/05/2019',
  '21/05/2019',
  '23/05/2019',
  '24/05/2019',
  '26/05/2019',
  '28/05/2019',
  '29/05/2019',
  '01/06/2019',
  '02/06/2019',
  '07/06/2019',
  '08/06/2019',
  '09/06/2019',
  '12/06/2019',
  '14/06/2019',
  '15/06/2019',
  '16/06/2019',
  '19/06/2019',
  '20/06/2019',
  '21/06/2019',
  '22/06/2019',
  '23/06/2019',
  '24/06/2019',
  '25/06/2019',
  '26/06/2019',
  '27/06/2019',
  '28/06/2019',
  '04/07/2019',
  '05/07/2019',
  '08/07/2019',
  '10/07/2019',
  '11/07/2019',
  '13/07/2019',
  '14/07/2019',
  '15/07/2019',
  '17/07/2019',
  '19/07/2019',
  '23/07/2019',
  '24/07/2019',
  '25/07/2019',
  '26/07/2019',
  '28/07/2019',
  '01/08/2019',
  '02/08/2019',
  '03/08/2019',
  '06/08/2019',
  '09/08/2019',
  '11/08/2019',
  '12/08/2019',
  '13/08/2019' ])
  })
});