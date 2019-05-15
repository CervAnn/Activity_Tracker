const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/userDataSample1');
const activityData = require('../data/activitySample');
const userActivity = require('../src/userActivity');

describe('userActivity', function() {

  it('should be a function', function() {
  expect(userActivity).to.be.a('function');
  });
});