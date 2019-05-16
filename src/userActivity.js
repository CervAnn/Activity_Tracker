class userActivity {
  constructor(userData, id) {
        this.userData = userData[id-1];
    }
    
// For a specific day (specified by a date), return the miles a user has walked 
// based on their number of steps (use their strideLength to help calculate this)


    walkedMilesUser(dataForActivity, dataForUser, id, date) {
        let dateOfSteps = dataForActivity[id - 1].activityData
        .find(obj => parseInt(obj.date.split('/')) === parseInt(date.split('/')));
        let userStride =  dataForUser[id - 1].strideLength
        let totalMiles = (dateOfSteps.numSteps * userStride) / 5280
        return parseFloat(totalMiles.toFixed(2))
    }

}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userActivity;
}