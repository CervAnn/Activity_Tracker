import $ from 'jquery';
import userIndividual from './userIndividual';
// import './css/normalize.css';
// import './css/main.css';

const $boxes = $(".boxes");

$(".boxes").mouseover(function() {
  $(".chart-text").removeClass("hidden");
});