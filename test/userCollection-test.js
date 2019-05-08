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

    it('should return User data based on User ID', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
    expect(userRepo1.findUserData(4)).to.equal(userRepo1[3]);
    })

    it('should return the average step goal among Users', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
    expect(userRepo1.averageStepGoal()).to.equal(8400);
    })
  
    it('should find and return the state most users are from', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
    expect(userRepo1.findMostState()).to.equal('SD')
    })
  });