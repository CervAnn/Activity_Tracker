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

    activeMinutesUser(dataForActivity, id, date) {
        let dateOfMinutesActive = dataForActivity[id - 1].activityData
        .find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        return dateOfMinutesActive.minutesActive
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
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userActivity;
}