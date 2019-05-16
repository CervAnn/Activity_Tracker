class userSleep{
    constructor(userData, id) {
        this.userData = userData[id-1];
    }
    getAverageSleep(data, id) {
        const hoursSlept = data[id - 1].sleepData.map(object => {
          return object.hoursSlept;
        })
        const averageHoursSlept = hoursSlept.reduce((acc, hour) => {
          return acc += hour;
        }, 0)
        return Math.floor(averageHoursSlept / hoursSlept.length);
    }
    
    getAverageSleepQuality(data, id) {
        const sleepQuality = data[id - 1].sleepData.map(object => {
            return object.sleepQuality;
        })
        const averageSleepQuality = sleepQuality.reduce((acc, hour) => {
            return acc += hour;
        }, 0)
        return Math.floor(averageSleepQuality / sleepQuality.length);
    }
    
    getDateOfSleep(data, id, date) {
        return data[id - 1].sleepData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
    }
    
    getHoursSleptOfDay(object) {
        return object.hoursSlept;
    }
    
    getSleepQualityOfDay(object) {
        return object.sleepQuality;
    }
    
    getSleepOfWeek(data, id, date) {
        const sleepData = data[id - 1].sleepData;
        const day = sleepData.find(obj => obj.date === date);
        const week = sleepData.reduce((acc, obj, index, array) => {
            const indexOfDay = array.indexOf(day);
            const weekOfSleep = sleepData.slice((indexOfDay - 6), (indexOfDay + 1))
            const sleepWeekObject = weekOfSleep.reduce((acc, obj, index, array) => {
            acc[obj.date] = obj.hoursSlept;
            return acc;
            }, {})
            return sleepWeekObject;
        }, {})
        return week;
    }
    
    parseSleepOfWeek(weekObject) {
        const dates = Object.keys(weekObject);
        const sleep = Object.values(weekObject);
        return `
          <p class="info-text">${dates[0]}: ${sleep[0]}</p> 
          <p class="info-text">${dates[1]}: ${sleep[1]}</p> 
          <p class="info-text">${dates[2]}: ${sleep[2]}</p> 
          <p class="info-text">${dates[3]}: ${sleep[3]}</p> 
          <p class="info-text">${dates[4]}: ${sleep[4]}</p> 
          <p class="info-text">${dates[5]}: ${sleep[5]}</p> 
          <p class="info-text">${dates[6]}: ${sleep[6]}</p>`
    }
    
    getSleepQualityOfWeek(data, id, date) {
        const sleepData = data[id - 1].sleepData;
        const day = sleepData.find(obj => obj.date === date);
        const week = sleepData.reduce((acc, obj, index, array) => {
            const indexOfDay = array.indexOf(day);
            const weekOfSleep = sleepData.slice((indexOfDay - 6), (indexOfDay + 1))
            const sleepWeekObject = weekOfSleep.reduce((acc, obj) => {
            acc[obj.date] = obj.sleepQuality;
            return acc;
            }, {})
            return sleepWeekObject;
        }, {})
        return week;
    }

    getAllUsersSleepQuality(data) {
        let sleepQuality = data.map(user => user.sleepData).reduce((acc, userData) => {
            acc.push(userData);
            return acc;
        }, [])
        let hopefully = sleepQuality.flat(1);
        let bigNumber = hopefully.reduce((acc, obj) => {
            acc += obj.sleepQuality;
            return acc;
        }, 0);
        return parseFloat((bigNumber / hopefully.length).toFixed(2));
    }

    getPeopleWhoSleepGood(data, date) {
        let sleepData = data.map(user => user.sleepData);
        let datas = sleepData.reduce((acc, user, index) => {
            acc.push(this.getSleepQualityOfWeek(data, index + 1, date))
            return acc;
        }, [])
        let findUser = data.reduce((acc, user, index) => {
            let addUpQualities = Object.values(datas[index]).reduce((acc, numbers) => {
                acc += numbers;
                return acc;
            }, 0)
            acc[user.userID] = (addUpQualities / 7).toFixed(2);
        return acc
        }, {})
        let valuesOverThree = Object.values(findUser).filter(value => value > 3)
        let ultimateUsers = Object.keys(findUser).reduce((acc, key, index, array) => {
            if (valuesOverThree.includes(findUser[key])) {
                acc.push(parseFloat(key))             
            }
            return acc;
        }, [])
        return ultimateUsers;
    }

    getPeopleWhoSleepLong(data, date) {
        let userIds = data.map(user => user.userID);
        let hoursSlept = data.map(user => user.sleepData).reduce((acc, specificData) => {
            var dateObject = specificData.find(obj => obj.date === date)
            acc.push(dateObject.hoursSlept);
            return acc;
        }, []);
        let bigHour = Math.max(...hoursSlept)
        let index = hoursSlept.indexOf(bigHour);
        return userIds[index];
    }

    getPeopleWhoSleepBest(data, date) {
        let userIds = data.map(user => user.userID);
        let sleepQualities = data.map(user => user.sleepData).reduce((acc, specificData) => {
            var dateObject = specificData.find(obj => obj.date === date)
            acc.push(dateObject.sleepQuality);
            return acc;
        }, []);
        let bigHour = Math.max(...sleepQualities)
        let index = sleepQualities.indexOf(bigHour);
        return userIds[index];
    }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userSleep;
}