const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');
const UserRepository = require('../src/userCollection');
const userDataSample1 = require('../data/userDataSample1');

describe('UserRespository', function() {

    it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
    });
  
    it('should be an instance of User', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
      expect(userRepo1).to.be.an.instanceof(UserRepository)
    })

    it('should return user data based on id', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
      expect(userRepo1.findUserData(1)).to.equal(
        {
        "id": 1,
        "name": "Nyasia Weber",
        "address": "270 August Meadows, Maribelside SD 36129",
        "email": "Jordane_Schultz@yahoo.com",
        "strideLength": 4.7,
        "dailyStepGoal": 8000
      })
    })

    it('should find and return the state most users are from', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
      expect(userRepo1.findMostState()).to.equal('SD')
    })
  });