const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');
const userSample = require('../data/UserSample');
const longUserData = require('../data/userDataSample1');
const hydrationData = require('../data/hydrationSample');

describe('User', function() {

  it('should be a function', function() {
  expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User(longUserData);
    expect(user).to.be.an.instanceof(User)
  });

  it('should return first name of a user', function() {
    const user = new User(longUserData, 1);
    user.returnFirstName();
    expect(user.returnFirstName()).to.equal('Nyasia');
  });

  it('should return User data based on User ID', function() {
    const user = new User(longUserData);
  expect(user.findUserData(longUserData, 1)).to.equal(longUserData[0]);
  })

  it('should compare individual step goal to all user step goals', function() {
    const user = new User(longUserData, 1);
    expect(user.compareStepGoal(longUserData, 1)).to.equal(`Your daily step goal is 6035 more than the average user.`)
  });

  it('should calculate the average amount of fluids they consume per day', function() {
    const user = new User(longUserData, 1);
    expect(user.getAverageFluids(hydrationData, 1)).to.equal(55)
  })

  it('should return ounces of fluids consumed on any given date', function() {
    const user = new User(longUserData, 1);
    expect(user.getFluidsOfDay(hydrationData, 1, "06/05/2019")).to.equal(64);
  })

  it('should return ounces of fluids consumed in a week given a date', function() {
    const user = new User(longUserData, 1);
    expect(user.getFluidsOfWeek(hydrationData, 1, "06/05/2019")).to.deep.equal({ '06/05/2019': 64,
  '07/05/2019': 80,
  '08/05/2019': 39,
  '09/05/2019': 40,
  '10/05/2019': 65,
  '11/05/2019': 84,
  '12/05/2019': 33 });
  })

  it('should take the information gathered in getFluidsOfWeek and. turn it into something readable', function() {
    const user = new User(longUserData, 1);
    expect(user.parseFluidsOfWeek(user.getFluidsOfWeek(hydrationData, 1, "06/05/2019"))).to.equal(`<p class="info-text">${dates[0]}: ${fluids[0]}</p> 
      <p class="info-text">${dates[1]}: ${fluids[1]}</p> 
      <p class="info-text">${dates[2]}: ${fluids[2]}</p> 
      <p class="info-text">${dates[3]}: ${fluids[3]}</p> 
      <p class="info-text">${dates[4]}: ${fluids[4]}</p> 
      <p class="info-text">${dates[5]}: ${fluids[5]}</p> 
      <p class="info-text">${dates[6]}: ${fluids[6]}</p>`)
  })
  
});