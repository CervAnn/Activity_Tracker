const chai = require('chai');
const expect = chai.expect;
const User = require('../src/userIndividual');
const userData = require('../data/userDataSample1');
const hydrationData = require('../data/hydrationSample');
const sleepData = require('../data/sleepSample');

describe('User', function() {

  it('should be a function', function() {
  expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User(userData);
    expect(user).to.be.an.instanceof(User)
  });

  it('should return first name of a user', function() {
    const user = new User(userData, 1);
    user.returnFirstName();
    expect(user.returnFirstName()).to.equal('Nyasia');
  });

  it('should return User data based on User ID', function() {
    const user = new User(userData);
  expect(user.findUserData(userData, 1)).to.equal(userData[0]);
  })

  it('should compare individual step goal to all user step goals', function() {
    const user = new User(userData, 1);
    expect(user.compareStepGoal(userData, 1)).to.equal(`Your daily step goal is 6035 more than the average user.`)
  });

  it('should calculate the average amount of fluids they consume per day', function() {
    const user = new User(userData, 1);
    expect(user.getAverageFluids(hydrationData, 1)).to.equal(55)
  })

  it('should return ounces of fluids consumed on any given date', function() {
    const user = new User(userData, 1);
    expect(user.getFluidsOfDay(hydrationData, 1, "06/05/2019")).to.equal(64);
  })

  it('should return a week preceding a given date', function() {
    const user = new User(userData, 1);
    expect(user.getWeekPrecedingDate(hydrationData[user.userData.id - 1].hydrationData, 1, "13/05/2019")).to.deep.equal([ { date: '06/05/2019', numOunces: 64 },
  { date: '07/05/2019', numOunces: 80 },
  { date: '08/05/2019', numOunces: 39 },
  { date: '09/05/2019', numOunces: 40 },
  { date: '10/05/2019', numOunces: 65 },
  { date: '11/05/2019', numOunces: 84 },
  { date: '12/05/2019', numOunces: 33 } ])
  })

  it('should return ounces of fluids consumed in a week given a date', function() {
    const user = new User(userData, 1);
    expect(user.getFluidsOfWeek(hydrationData, 1, "13/05/2019")).to.deep.equal({ '06/05/2019': 64,
  '07/05/2019': 80,
  '08/05/2019': 39,
  '09/05/2019': 40,
  '10/05/2019': 65,
  '11/05/2019': 84,
  '12/05/2019': 33 });
  })

  it('should take the information gathered in getFluidsOfWeek and turn it into something readable', function() {
    const user = new User(userData, 1);
    expect(user.parseFluidsOfWeek(user.getFluidsOfWeek(user.getWeekPrecedingDate(hydrationData[user.userData.id - 1].hydrationData, 1, "13/05/2019")))).to.deep.equal(`<p class="info-text">${dates[0]}: ${fluids[0]}</p> 
      <p class="info-text">${dates[1]}: ${fluids[1]}</p> 
      <p class="info-text">${dates[2]}: ${fluids[2]}</p> 
      <p class="info-text">${dates[3]}: ${fluids[3]}</p> 
      <p class="info-text">${dates[4]}: ${fluids[4]}</p> 
      <p class="info-text">${dates[5]}: ${fluids[5]}</p> 
      <p class="info-text">${dates[6]}: ${fluids[6]}</p>`)
  })
  
  it('should find the average numbers of sleep a user gets per day', function() {
    const user = new User(userData, 1);
    expect(user.getAverageSleep(sleepData, 1)).to.equal(7);
  })

  it('should find the info about sleep for a user given a date', function() {
    const user = new User(userData, 1);
    expect(user.getDateOfSleep(sleepData, 1, "06/05/2019")).to.deep.equal({ date: '06/05/2019', hoursSlept: 8, sleepQuality: 4.8 })
  })

  it('should find the average quality of sleep a user gets per day', function() {
    const user = new User(userData, 1);
    expect(user.getAverageSleepQuality(sleepData, 1)).to.equal(2);
  })

  it('should return hours slept on any given date', function() {
    const user = new User(userData, 1);
    expect(user.getHoursSleptOfDay(user.getDateOfSleep(sleepData, 1, "06/05/2019"))).to.equal(8);
  })

  it('should return sleep quality on any given date', function() {
    const user = new User(userData, 1);
    expect(user.getSleepQualityOfDay(user.getDateOfSleep(sleepData, 1, "06/05/2019"))).to.equal(4.8);
  })

 it('should return hours slept in a week given a date', function() {
    const user = new User(userData, 1);
    expect(user.getSleepOfWeek(sleepData, 1, "13/05/2019")).to.deep.equal({ "06/05/2019": 8,
      "07/05/2019": 10.7,
      "08/05/2019": 8.1,
      "09/05/2019": 4.5,
      "10/05/2019": 10.7,
      "11/05/2019": 5.6,
      "12/05/2019": 10.1 });
  })

 it('should return quality of sleep throughout a week given a date', function() {
    const user = new User(userData, 1);
    user.parseSleepOfWeek(user.getSleepOfWeek(sleepData, 1, "13/05/2019"))
    expect(user.getSleepQualityOfWeek(user.getWeekPrecedingDate(sleepData, 1, "13/05/2019"))).to.deep.equal({ '06/05/2019': 4.8,
  '07/05/2019': 4.8,
  '08/05/2019': 1.9,
  '09/05/2019': 3.4,
  '10/05/2019': 4.3,
  '11/05/2019': 3.5,
  '12/05/2019': 1.7 });
  })
});