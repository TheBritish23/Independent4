import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {age} from "./age.js";

$(document).ready(function(){
  $("form#Age1").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("#userAge").val());
    if (Math.ceil(userAge)-userAge) {
      alert("Invalid Input, *****!");
    } else {
      const newAge = new age(userAge);
      $("#mercuryYears").text(newAge.mercuryYears());
      $("#venusYears").text(newAge.venusYears());
      $("#marsYears").text(newAge.marsYears());
      $("#jupiterYears").text(newAge.jupiterYears());
      if (userAge < 99) {
        $("#young").text(newAge.lifeExpectancy(userAge));
      }else{
    return $("#old").text(newAge.lifeExpectancy(userAge));
  }
    }
  });
});
