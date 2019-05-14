const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/userDataSample1');
const sleepData = require('../data/sleepSample');
const userSleep = require('../src/userSleep');

describe('userSleep', function() {

  it('should find the average numbers of sleep a user gets per day', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getAverageSleep(sleepData, 1)).to.equal(7);
  })
    
  it('should find the info about sleep for a user given a date', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getDateOfSleep(sleepData, 1, "06/05/2019")).to.deep.equal({ date: '06/05/2019', hoursSlept: 8, sleepQuality: 4.8 })
  })
    
  it('should find the average quality of sleep a user gets per day', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getAverageSleepQuality(sleepData, 1)).to.equal(2);
  })
    
  it('should return hours slept on any given date', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getHoursSleptOfDay(userZs.getDateOfSleep(sleepData, 1, "06/05/2019"))).to.equal(8);
  })
    
  it('should return sleep quality on any given date', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getSleepQualityOfDay(userZs.getDateOfSleep(sleepData, 1, "06/05/2019"))).to.equal(4.8);
  })
    
  it('should return hours slept in a week given a date', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getSleepOfWeek(sleepData, 1, "13/05/2019")).to.deep.equal({ "06/05/2019": 8,
    "07/05/2019": 10.7,
    "08/05/2019": 8.1,
    "09/05/2019": 4.5,
    "10/05/2019": 10.7,
    "11/05/2019": 5.6,
    "12/05/2019": 10.1 });
  })
    
  it('should return quality of sleep throughout a week given a date', function() {
    const userZs = new userSleep(userData, 1);
    userZs.parseSleepOfWeek(userZs.getSleepOfWeek(sleepData, 1, "13/05/2019"))
    expect(userZs.getSleepQualityOfWeek(sleepData, 1, "13/05/2019")).to.deep.equal({ '06/05/2019': 4.8,
    '07/05/2019': 4.8,
    '08/05/2019': 1.9,
    '09/05/2019': 3.4,
    '10/05/2019': 4.3,
    '11/05/2019': 3.5,
    '12/05/2019': 1.7 });
  })

  it('should return quality of sleep throughout a week given a date', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getAllUsersSleepQuality(sleepData)).to.equal(3.08)

  })

  it('should return people who sleep good', function() {
    const userZs = new userSleep(userData, 1);
    expect(userZs.getPeopleWhoSleepGood(sleepData, "13/05/2019")).to.deep.equal([1, 2])

  })

});