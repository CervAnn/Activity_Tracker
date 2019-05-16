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
        return dateOfMinutesActive.minutesActive;
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

    getStepsOfDay(data, id, date) {
        const stepObject = data[id - 1].activityData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        return stepObject.numSteps;
    }

    getStairsOfDay(data, id, date) {
        const stairObject = data[id - 1].activityData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        return stairObject.flightsOfStairs;
    }

    getMinutesOfDay(data, id, date) {
        const minuteObject = data[id - 1].activityData.find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        return minuteObject.minutesActive;
    }

    compareSteps(data, id, date) {
        if (this.getStepsOfDay(data, id, date) > this.findAverageStepsForDate(data, date)) {
            return `You walked ${this.getStepsOfDay(data, id, date) - this.findAverageStepsForDate(data, date)} more steps than the average user today.`
        } else {
            return `You walked ${this.findAverageStepsForDate(data, date) - this.getStepsOfDay(data, id, date)} less steps than the average user today.`
        }
    }

    compareStairs(data, id, date) {
        if (this.getStairsOfDay(data, id, date) > this.findAverageStairsForDate(data, date)) {
            return `You walked up ${this.getStairsOfDay(data, id, date) - this.findAverageStairsForDate(data, date)} more stairs than the average user today.`
        } else {
            return `You walked up ${this.findAverageStairsForDate(data, date) - this.getStairsOfDay(data, id, date)} less stairs than the average user today.`
        }
    }

    compareMinutes(data, id, date) {
        if (this.getMinutesOfDay(data, id, date) > this.findAverageMinutesForDate(data, date)) {
            return `You spent ${this.getMinutesOfDay(data, id, date) - this.findAverageMinutesForDate(data, date)} more minutes active than the average user today.`
        } else {
            return `You spent ${this.findAverageMinutesForDate(data, date) - this.getMinutesOfDay(data, id, date)} less minutes active than the average user today.`
        }
    }

    getStepsOfWeek(data, id, date) {
        const StepData = data[id - 1].activityData;
        const StepObject = StepData.find(obj => obj.date === date);
        const StepWeek = StepData.reduce((acc, obj, index, array) => {
          const theIndex = array.indexOf(StepObject);
          const newArray = StepData.slice((theIndex - 7), theIndex)
          const ourObject = newArray.reduce((acc, obj, index, array) => {
            acc[obj.date] = obj.numSteps;
            return acc;
          }, {})
          return ourObject;
        }, {})
        return StepWeek;
    }

    getStepChallengeInfo(data, userData, id, id2, id3, id4, date) {
        let stepObjects = [this.getStepsOfWeek(data, id, date), 
        this.getStepsOfWeek(data, id, date), 
        this.getStepsOfWeek(data, id2, date), 
        this.getStepsOfWeek(data, id3, date), 
        this.getStepsOfWeek(data, id4, date)];
        var bigSteps = stepObjects.reduce((acc, obj) => {
            var bigStep = Object.values(obj).reduce((acc, step) => {
                acc += step;
                return acc;
            }, 0);
            acc.push(bigStep);
            return acc;
        }, []);
        return `<p>${userData[bigSteps.indexOf(Math.max(...bigSteps))].name} had the most steps this week with ${Math.max(...bigSteps)} steps!</p>
        <p>${userData[id].name} walked ${bigSteps[0]} steps}!</p>
        <p>${userData[id2].name} walked ${bigSteps[1]} steps}!</p>
        <p>${userData[id3].name} walked ${bigSteps[2]} steps}!</p>
        <p>${userData[id4].name} walked ${bigSteps[3]} steps}!</p>`;
    }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userActivity;
}