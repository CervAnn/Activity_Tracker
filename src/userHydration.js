class userHydration {
    constructor(userData, id) {
        this.userData = userData[id-1]
    }
    getAverageFluids(data, id) {
        const numOunces = data[id - 1].hydrationData.map(object => {
          return object.numOunces;
        })
        const averageOunces = numOunces.reduce((acc, oz) => {
          return acc += oz;
        }, 0)
        return Math.floor(averageOunces / numOunces.length);
      }
    
    getFluidsOfDay(data, id, date) {
        const fluidObject = data[id - 1].hydrationData
        .find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        return fluidObject.numOunces;
    }
    
    getFluidsOfWeek(data, id, date) {
        const fluidData = data[id - 1].hydrationData;
        const fluidObject = fluidData.find(obj => obj.date === date);
        const fluidWeek = fluidData.reduce((acc, obj, index, array) => {
          const theIndex = array.indexOf(fluidObject);
          const newArray = fluidData.slice((theIndex - 7), theIndex)
          const ourObject = newArray.reduce((acc, obj, index, array) => {
            acc[obj.date] = obj.numOunces;
            return acc;
          }, {})
          return ourObject;
        }, {})
        return fluidWeek;
    }
    
    parseFluidsOfWeek(weekObject) {
        const dates = Object.keys(weekObject);
        const fluids = Object.values(weekObject);
        return `
          <p class="info-text">${dates[0]}: ${fluids[0]}</p> 
          <p class="info-text">${dates[1]}: ${fluids[1]}</p> 
          <p class="info-text">${dates[2]}: ${fluids[2]}</p> 
          <p class="info-text">${dates[3]}: ${fluids[3]}</p> 
          <p class="info-text">${dates[4]}: ${fluids[4]}</p> 
          <p class="info-text">${dates[5]}: ${fluids[5]}</p> 
          <p class="info-text">${dates[6]}: ${fluids[6]}</p>`
    }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userHydration;
}