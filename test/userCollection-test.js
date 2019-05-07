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
      const userRepo1 = new UserRepository();
      expect(userRepo1).to.be.an.instanceof(UserRepository)
    })
  
    // it('should be an instance of ', function() {
    //   const userRepo1 = new UserRepository();
    // expect(userRepo1).to.be.an.instanceof(UserRepository)
    // })
  });