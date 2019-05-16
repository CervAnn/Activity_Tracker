class userActivity {
  constructor(userData, id) {
        this.userData = userData[id-1];
    }

    walkedMilesUser(dataForActivity, dataForUser, id, date) {
        let dateOfSteps = dataForActivity[id - 1].activityData
        .find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        let userStride =  dataForUser[id - 1].strideLength
        let totalMiles = (dateOfSteps.numSteps * userStride) / 5280
        return parseFloat(totalMiles.toFixed(2))
    }

    activeMinutesUser(data, id, date) {
        let dateOfMinutesActive = data[id - 1].activityData
        .find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        return dateOfMinutesActive.minutesActive
    }

    createWeekObject(data, id, date) {
        let dataForActivity = data[id - 1].activityData;
        let day = dataForActivity.find(obj => obj.date === date);
        let week = dataForActivity.reduce((acc, obj, index, array) => {
            const indexOfDay = array.indexOf(day);
            const fullWeek = dataForActivity.slice((indexOfDay - 6), (indexOfDay + 1))
            const activityWeekObject = fullWeek.reduce((acc, obj, index, array) => {
            acc[obj.date] = obj.minutesActive;
            return acc;
            }, {})
            return activityWeekObject;
        }, {})
        return week;
    }

    avgActiveMinutes(weekObject) {
        let activeMins = Object.values(weekObject).reduce((acc, minutes) => {
            return acc + minutes
        }, 0)
        return parseInt(Math.floor(activeMins / 7));
    }

    determineIfReachedStepGoalForDay(data, id, date) {
        let dayOfActivity = data[id -1].activityData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        if (dayOfActivity.numSteps >= this.userData.dailyStepGoal) {
            return true;
        } else {
            return false;
        }
    }

    findDaysUserExceedsStepGoal(data, id, date) {
        let activityObjects = data[id -1].activityData.filter(obj => obj.numSteps > this.userData.dailyStepGoal);
        return activityObjects.map(obj => obj.date);
    }

    findStairClimbingRecord(data, id) {
        let stairRecords = data[id - 1].activityData.map(obj => obj.flightsOfStairs);
        return Math.max(...stairRecords);
    }

    findAverageStairsForDate(data, date) {
        let stairsClimbedObject = data.map(user => user.activityData).reduce((acc, userData) => {
            acc.push(userData.filter(user => user.date === date));
            return acc;
        }, [])
        let flatStairs = stairsClimbedObject.flat(1);
        let totalStairs = flatStairs.reduce((acc, obj) => {
            acc += obj.flightsOfStairs;
            return acc;
        }, 0);
        return parseInt((totalStairs / flatStairs.length));
    }

    findAverageMinutesForDate(data, date) {
        let minutesActiveObjects = data.map(user => user.activityData).reduce((acc, userData) => {
            acc.push(userData.filter(user => user.date === date));
            return acc;
        }, [])
        let flatMinutes = minutesActiveObjects.flat(1);
        let totalMinutes = flatMinutes.reduce((acc, obj) => {
            acc += obj.minutesActive;
            return acc;
        }, 0);
        return parseInt((totalMinutes / flatMinutes.length));
    }

    findAverageStepsForDate(data, date) {
        let stepsObjects = data.map(user => user.activityData).reduce((acc, userData) => {
            acc.push(userData.filter(user => user.date === date));
            return acc;
        }, [])
        let flatSteps = stepsObjects.flat(1);
        let totalMinutes = flatSteps.reduce((acc, obj) => {
            acc += obj.numSteps;
            return acc;
        }, 0);
        return parseInt((totalMinutes / flatSteps.length));
    }

    findStepRecord(data, id) {
        let stepRecords = data[id - 1].activityData.map(obj => obj.numSteps);
        return Math.max(...stepRecords);
    }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userActivity;
}