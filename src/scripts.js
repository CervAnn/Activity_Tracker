$(document).ready(() => {
  const id = getRandomId();
  const user = new User(userData, id);
  var today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  var today = dd + '/' + mm + '/' + yyyy;

  function getRandomId() {
    return Math.floor(Math.random() * (50 - 1) + 1);
  }

  $(document).ready(function() {
    $('.user-name').text(user.returnFirstName(id))
  })

  $('.user-photo').click(function() {
    $('.user-info').toggleClass('hidden')
    $('.p1').text('Name: ' + user.userData.name);
    $('.p2').text('Address: ' + user.userData.address);
    $('.p3').text('Email: ' + user.userData.email)
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
  });

  $('.box1').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card').removeClass('hidden');
    $('.info-card').addClass('yellow');
    $('.info-card').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.yellow-close').removeClass('hidden');
    $('h3').text('Hello ' + user.returnFirstName() + '!');
    $('.info-text1').text(user.compareStepGoal(userData));
  });

  $('.yellow-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card').addClass('hidden');
    $('.info-card').removeClass('yellow');
    $('.info-card').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.yellow-close').addClass('hidden');

  });

  $('.box2').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card2').removeClass('hidden');
    $('.info-card2').addClass('blue');
    $('.info-card2').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.blue-close').removeClass('hidden');
    $('h3').text('Hello ' + user.returnFirstName(1) + '!');
    $('.info-text-2a').text('You have consumed ' + `${user.getFluidsOfDay(hydrationData, id, today)}` + ' ounces of fluids today.');
    $('.info-text-2b').text('You have consumed the following amounts of fluid this week:')
    $('.info-text-2c').html(user.parseFluidsOfWeek(user.getFluidsOfWeek(hydrationData, 1, today)))
  });

  $('.blue-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card2').addClass('hidden');
    $('.info-card2').removeClass('blue');
    $('.info-card2').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.blue-close').addClass('hidden');
  })

  $('.box3').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card3').removeClass('hidden');
    $('.info-card3').addClass('lavendar');
    $('.info-card3').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.lavendar-close').removeClass('hidden');
    $('h3').text('Hello ' + `${user.returnFirstName(1)}` + '!');
    $('.info-text-3a').text('You have slept ' + `${user.getHoursSleptOfDay(user.getDateOfSleep(sleepData, id, today))}` + ' hours today.');
    $('.info-text-3b').text('You have slept the following amounts this week:')
    $('.info-text-3c').html(user.parseSleepOfWeek(user.getSleepOfWeek(sleepData, id, today)));
    console.log(user.getSleepOfWeek(sleepData, id, today))
  })

  $('.lavendar-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card3').addClass('hidden');
    $('.info-card3').removeClass('lavendar');
    $('.info-card3').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.lavendar-close').addClass('hidden');
  })
  
  $('.box4').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card4').removeClass('hidden');
    $('.info-card4').addClass('rose');
    $('.info-card4').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.rose-close').removeClass('hidden');
    $('h3').text('Hello ' + `${user.returnFirstName(1)}` + '!');

  })

  $('.rose-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card4').addClass('hidden');
    $('.info-card4').removeClass('rose');
    $('.info-card4').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.rose-close').addClass('hidden');
  })

  // $box.hover(function() {
  //   $('h2').toggleClass('hidden');
  // });

})

// !!separate boxes into big section, have section for infobox to grid

// select each widget 
// add event listeners to widgets

// select nav bar
// add event listener to nav bar when clicked
// upon click, provide user data
// append card that uses template literal and interpolats
// user class data


