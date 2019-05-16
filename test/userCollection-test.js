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
  
  it('should return the average step goal among Users', function() {
    const userRepo1 = new UserRepository('../data/userDataSample1');
  expect(userRepo1.averageStepGoal()).to.equal(7160);
  })

  it('should return an array of states', function() {
    const userRepo1 = new UserRepository('../data/userDataSample1');
    expect(userRepo1.isolateStates()).to.deep.equal(['SD',
  'SD',
  'OH',
  'AK',
  'MT',
  'NE',
  'PA',
  'HI',
  'SC',
  'TX',
  'MO',
  'AR',
  'TX',
  'RI',
  'IA',
  'AL',
  'MT',
  'WA',
  'IL',
  'VT',
  'NH',
  'KY',
  'FL',
  'NM',
  'CA'])
  })

  it('should count how many states there are', function() {
    const userRepo1 = new UserRepository('../data/userDataSample1');
    expect(userRepo1.countStates(['SD', 'SD', 'OH', 'AK', 'MT'])).to.deep.equal({ SD: 1, OH: 0, AK: 0, MT: 0 })
  })

  it('should find and return the state most users are from', function() {
    const userRepo1 = new UserRepository('../data/userDataSample1');
  expect(userRepo1.findMostState({ SD: 1, OH: 0, AK: 0, MT: 0 })).to.equal('SD')
  })
});