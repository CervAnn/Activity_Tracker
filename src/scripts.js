$(document).ready(() => {
  const $infoCard = $('.info-card');
  const $box1 = $('.box1');
  const $box2 = $('.box2');
  const $box3 = $('.box3');
  const $box4 = $('.box4');
  const user = new User(userData);

  $('.user-photo').click(function() {
    $('.user-info').toggleClass('hidden')
    $('.p1').append('Name: ' + user.userData.name);
    $('.p2').append('Address: ' + user.userData.address);
    $('.p3').append('Email: ' + user.userData.email)
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
  })

  $('.box1').click(function() {
    $('.boxes').toggleClass('side')
    $('.info-card').toggleClass('hidden');
    $('.info-card').toggleClass('yellow');
    $('.info-card').toggleClass('info-card-stretch')
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
  })

  $('.box2').click(function() {
    $('.boxes').toggleClass('side')
    $('.info-card').toggleClass('hidden');
    $('.info-card').toggleClass('blue');
    if ($('.info-card').hasClass( "yellow" )) {
      $('.info-card').removeClass('yellow') && $('.info-card').addClass('blue');
    }
    $('.info-card').toggleClass('info-card-stretch')
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
  })

  $('.box3').click(function() {
    $('.boxes').toggleClass('side')
    $('.info-card').toggleClass('hidden');
    $('.info-card').toggleClass('lavendar');
    $('.info-card').toggleClass('info-card-stretch')
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
  })
  
  $('.box4').click(function() {
    $('.boxes').toggleClass('side')
    $('.info-card').toggleClass('hidden');
    $('.info-card').toggleClass('rose');
    $('.info-card').toggleClass('info-card-stretch')
    $('main').toggleClass('side-main');
    $('main').toggleClass('grid-main');
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


