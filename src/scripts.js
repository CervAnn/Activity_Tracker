$(document).ready(() => {
  const id = getRandomId();
  const friendIds = [getRandomId(), getRandomId(), getRandomId()]
  const user = new User(userData, id);
  const friend1 = new User(userData, friendIds[0]);
  const friend2 = new User(userData, friendIds[1]);
  const friend3 = new User(userData, friendIds[2]);
  const userHydro = new userHydration(userData, id)
  const userZs = new userSleep(userData, id)
  const userAct = new userActivity(userData, id);
  var today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  var today = dd + '/' + mm + '/' + yyyy;

  function getRandomId() {
    return Math.floor(Math.random() * (50 - 1) + 1);
  }

  $(document).ready(function() {
    $('.user-name').text(user.returnFirstName(id));
  })

  $('.user-photo').click(function() {
    $('.user-info').toggleClass('hidden');
    $('.user-info').html(`<p>Name: ${user.userData.name}</p><p>Address: 
    ${user.userData.address}</p><p>Email: ${user.userData.email}</p>`);
    $('menu').toggleClass('side-main grid-main');
  });

  $('.friends').click(function() {
    $('.info-card').toggleClass('hidden peach info-card-stretch');
    $('.box1, .box2, .box3, .box4').toggleClass('hidden');
    $('.info-card').html(`
      <p>${friend1.returnFirstName(friendIds[0])} has walked ${userAct.getStepsOfDay(activityData, friendIds[0], today)} steps today.</p>
      <p>${friend2.returnFirstName(friendIds[1])} has walked ${userAct.getStepsOfDay(activityData, friendIds[1], today)} steps today.</p>
      <p>${friend3.returnFirstName(friendIds[2])} has walked ${userAct.getStepsOfDay(activityData, friendIds[2], today)} steps today.</p>
      <p>${userAct.getStepChallengeInfo(activityData, userData, id, friendIds[0], friendIds[1], friendIds[2], today)}`);
    $('menu').toggleClass('side-main grid-main');
  });

  $('.box1').click(function() {
    $('.info-card').toggleClass('hidden yellow info-card-stretch');
    $('menu').toggleClass('side-main grid-main');
    $('.box2, .box3, .box4').toggleClass('hidden');
    $('.info-card').html(`<h3>Hello ${user.returnFirstName()}!</h3><p>${user.compareStepGoal(userData)}</p>
      <p>You have walked ${userAct.getStepsOfDay(activityData, id, today)} steps today which, based on your stride length, amounts to ${userAct.walkedMilesUser(activityData, userData, id, today)} miles..</p>
      <p>Your all time walking record is ${userAct.findStepRecord(activityData, id)} steps in a day.</p>
      ${userAct.compareSteps(activityData, id, today)}`);
  });

  $('.box2').click(function() {
    $('.info-card').toggleClass('hidden blue info-card-stretch');
    $('menu').toggleClass('side-main grid-main');
    $('.box1, .box3, .box4').toggleClass('hidden');
    $('.info-card').html(`<h3>Hello ${user.returnFirstName()}!</h3>
    <p>You have consumed ${userHydro.getFluidsOfDay(hydrationData, id, today)} ounces of fluids today.</p>
    <p>You have consumed the following amounts of fluid this week:</p>
    <p>${userHydro.parseFluidsOfWeek(userHydro.getFluidsOfWeek(hydrationData, id, today))}</p>`);
  });

  $('.box3').click(function() {
    console.log(userZs.getSleepOfWeek(sleepData, id, today))
    $('.info-card').toggleClass('hidden lavendar info-card-stretch');
    $('menu').toggleClass('side-main grid-main');
    $('.box1, .box2, .box4').toggleClass('hidden');
    $('.info-card').html(`<h3>Hello ${user.returnFirstName()}!</h3>
    <p>You have slept ${userZs.getHoursSleptOfDay(userZs.getDateOfSleep(sleepData, id, today))} hours today.</p>
    <p>You have slept the following amounts this week:</p>
    <p>${userZs.parseSleepOfWeek(userZs.getSleepOfWeek(sleepData, id, today))}</p>
    <p>On average, you sleep ${userZs.getAverageSleep(sleepData, id)} with an average quality of ${userZs.getAverageSleepQuality(sleepData, id)}.</p>`);
  });
  
  $('.box4').click(function() {
    $('.info-card').toggleClass('hidden rose info-card-stretch');
    $('menu').toggleClass('side-main grid-main');
    $('.box1, .box2, .box3').toggleClass('hidden');
    $('.info-card').html(`<h3>Hello ${user.returnFirstName()}!</h3>
      <p>You have been active for ${userAct.activeMinutesUser(activityData, id, today)} minutes today.</p>
      <p>${userAct.compareStairs(activityData, id, today)}</p>
      <p>${userAct.compareMinutes(activityData, id, today)}</p>`);
  })

})



