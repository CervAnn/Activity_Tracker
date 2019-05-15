class userActivity {
  constructor(userData, id) {
        this.userData = userData[id-1];
    }
}

if (typeof module != 'undefined' && typeof module.exports != 'undefined') {
    module.exports = userActivity;
}