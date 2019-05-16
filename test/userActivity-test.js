const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/userDataSample1');
const activityData = require('../data/activitySample');
const userActivity = require('../src/userActivity');


describe('userActivity', function() {

  it('should be a function', function() {
    expect(userActivity).to.be.a('function');
  });

// For a specific day (specified by a date), return the miles a user has walked 
// based on their number of steps (use their strideLength to help calculate this)

  it('should return miles walks based on steps for a given day', function() {
    const userTrek = new userActivity(userData, 1);
    expect(userTrek.walkedMilesUser(activityData, userData, 1, "06/05/2019")).to.deep.equal(6.56)
  })


});