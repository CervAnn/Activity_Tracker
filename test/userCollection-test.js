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

    it('should return User data based on id', function() {
      const userRepo1 = new UserRepository('../data/userDataSample1');
    expect(userRepo1.findUserData(4)).to.equal(userRepo1[3]);
    })
  });