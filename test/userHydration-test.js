const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/userDataSample1');
const hydrationData = require('../data/hydrationSample');
const userHydration = require('../src/userHydration');

describe('userHydration', function() {

  it('should be a function', function() {

  expect(userHydration).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const userHydro = new userHydration(userData, 1);
    expect(userHydro).to.be.an.instanceof(userHydration)
  });

  it('should calculate the average amount of fluids they consume per day', function() {
    const userHydro = new userHydration(userData, 1);
    expect(userHydro.getAverageFluids(hydrationData, 1)).to.equal(55)
  })

  it('should return ounces of fluids consumed on any given date', function() {
    const userHydro = new userHydration(userData, 1);
    expect(userHydro.getFluidsOfDay(hydrationData, 1, "06/05/2019")).to.equal(64);
  })

  it('should return ounces of fluids consumed in a week given a date', function() {
    const userHydro = new userHydration(userData, 1);
    expect(userHydro.getFluidsOfWeek(hydrationData, 1, "13/05/2019")).to.deep.equal({ '06/05/2019': 64,
  '07/05/2019': 80,
  '08/05/2019': 39,
  '09/05/2019': 40,
  '10/05/2019': 65,
  '11/05/2019': 84,
  '12/05/2019': 33 });
  })

  it('should take the information gathered in getFluidsOfWeek and turn it into something readable', function() {
    const userHydro = new userHydration(userData, 1);
    expect(userHydro.parseFluidsOfWeek(userHydro.getFluidsOfWeek(hydrationData, 1, "13/05/2019"))).to.deep.equal(`<p class="info-text">${dates[0]}: ${fluids[0]}</p> 
      <p class="info-text">${dates[1]}: ${fluids[1]}</p> 
      <p class="info-text">${dates[2]}: ${fluids[2]}</p> 
      <p class="info-text">${dates[3]}: ${fluids[3]}</p> 
      <p class="info-text">${dates[4]}: ${fluids[4]}</p> 
      <p class="info-text">${dates[5]}: ${fluids[5]}</p> 
      <p class="info-text">${dates[6]}: ${fluids[6]}</p>`)
  })
});