$(document).ready(() => {
  const user = new User(userData);

  $(document).ready(function() {
    $('.user-name').text(user.returnFirstName(userData))
  })

  $('.user-photo').click(function() {
    $('.user-info').toggleClass('hidden')
    $('.p1').text('Name: ' + user.userData.name);
    $('.p2').text('Address: ' + user.userData.address);
    $('.p3').text('Email: ' + user.userData.email)
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
  })

  $('.box1').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card').removeClass('hidden');
    $('.info-card').addClass('yellow');
    $('.info-card').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.yellow-close').removeClass('hidden');
    $('.info-text').text(`Hello, ${user.returnFirstName(userData)}!`);
    $('.info-text-2').text(`${user.compareStepGoal(userData)}`);
  })

  $('.yellow-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card').addClass('hidden');
    $('.info-card').removeClass('yellow');
    $('.info-card').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.yellow-close').addClass('hidden');

  })

  $('.box2').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card').removeClass('hidden');
    $('.info-card').addClass('blue');
    $('.info-card').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.blue-close').removeClass('hidden');
  })

  $('.blue-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card').addClass('hidden');
    $('.info-card').removeClass('blue');
    $('.info-card').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.blue-close').addClass('hidden');
  })

  $('.box3').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card').removeClass('hidden');
    $('.info-card').addClass('lavendar');
    $('.info-card').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.lavendar-close').removeClass('hidden');
  })

  $('.lavendar-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card').addClass('hidden');
    $('.info-card').removeClass('lavendar');
    $('.info-card').removeClass('info-card-stretch')
    $('main').removeClass('side-main');
    $('main').addClass('grid-main');
    $('.lavendar-close').addClass('hidden');
  })
  
  $('.box4').click(function() {
    $('.boxes').addClass('hidden')
    $('.info-card').removeClass('hidden');
    $('.info-card').addClass('rose');
    $('.info-card').addClass('info-card-stretch')
    $('main').addClass('side-main');
    $('main').removeClass('grid-main');
    $('.rose-close').removeClass('hidden');
  })

  $('.rose-close').click(function() {
    $('.boxes').removeClass('hidden')
    $('.info-card').addClass('hidden');
    $('.info-card').removeClass('rose');
    $('.info-card').removeClass('info-card-stretch')
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


