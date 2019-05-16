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

   it('should return their stair climbing record', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.findStairClimbingRecord(activityData, 1)).to.equal(50)
  })

   it('should return average number of stairs climbed on a specific date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.findAverageStairsForDate(activityData, "15/05/2019")).to.equal(25)
  })

   it('should return average number of minutes active on a specific date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.findAverageMinutesForDate(activityData, "15/05/2019")).to.equal(138)
  })

   it('should return average number of minutes active on a specific date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.findAverageStepsForDate(activityData, "15/05/2019")).to.equal(9457)
  })

   it('should return their step record', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.findStepRecord(activityData, 1)).to.equal(14811)
  })

   it('should return steps given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.getStepsOfDay(activityData, 1, "15/05/2019")).to.equal(12224)
  })

    it('should return steps given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.getStairsOfDay(activityData, 1, "15/05/2019")).to.equal(32)
  })

     it('should return steps given date', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.getMinutesOfDay(activityData, 1, "15/05/2019")).to.equal(228)
  })

     it('should compare a user\'s steps to the average user for a given day', function() {
      const userTrek = new userActivity(userData, 1);
      expect(userTrek.compareSteps(activityData, 1, "15/05/2019")).to.equal('You walked 2767 more steps than the average user today.')
     })

     it('should compare a user\'s flights of stairs walked to the average user for a given day', function() {
      const userTrek = new userActivity(userData, 1);
      expect(userTrek.compareStairs(activityData, 1, "15/05/2019")).to.equal('You walked up 7 more stairs than the average user today.')
     })

     it('should compare a user\'s minutes of activity to the average user for a given day', function() {
      const userTrek = new userActivity(userData, 1);
      expect(userTrek.compareMinutes(activityData, 1, "15/05/2019")).to.equal('You spent 90 more minutes active than the average user today.')
     })
});