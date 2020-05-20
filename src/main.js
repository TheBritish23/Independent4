import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {userAge} from "./age.js";

$(document).ready(function(){
  $("form#userSpace").submit(function(event) {
    event.preventDefault();
    const userSpace = parseInt($("#userAge").val());
    if (Math.ceil(userAge)-userAge) {
      alert("Invalid Input, *****!");
} else {
  const newAge = new Years(userAge);
  $("#mercuryYears").text(newAge.mercuryYears());
  $("#venusYears").text(newAge.venusYears());
  $("#marsYears").text(newAge.marsYears());
  $("#jupiterYears").text(newAge.jupiterYears());
  if (userAge < 99) {

  }
