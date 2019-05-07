const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');

const mockUserData =  {
  "id": 1,
  "name": "Nyasia Weber",
  "address": "270 August Meadows, Maribelside SD 36129",
  "email": "Jordane_Schultz@yahoo.com",
  "strideLength": 4.7,
  "dailyStepGoal": 8000
}

describe('User', function() {

  it('should be a function', function() {
  expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User)
  });

  it('should return first name of the name property of mockUserData', function() {
    const user = new User(mockUserData);
    user.returnFirstName();
    expect(user.returnFirstName()).to.equal('Nyasia');
  });
});