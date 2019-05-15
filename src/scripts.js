$(document).ready(() => {
  const id = getRandomId();
  const user = new User(userData, id);
  const userHydro = new userHydration(userData, id)
  const userZs = new userSleep(userData, id)
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

  $('.box1').click(function() {
    $('.info-card').toggleClass('hidden yellow info-card-stretch');
    $('menu').toggleClass('side-main grid-main');
    $('.box2, .box3, .box4').toggleClass('hidden');
    $('.info-card').html(`<h3>Hello ${user.returnFirstName()}!</h3><p>${user.compareStepGoal(userData)}</p>`);
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
    $('.info-card').html(`<h3>Hello ${user.returnFirstName()}!</h3>`);
  })

})



