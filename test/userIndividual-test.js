const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');
const userDataSample1 = require('../data/userDataSample1');

describe('User', function() {

  it('should be a function', function() {
  expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User)
  })

  it('should be an instance of ', function() {
    const user = new User();
    const userDataSample1 = require('../data/userDataSample1');
  expect(user).to.be.an.instanceof(User)
  })
});