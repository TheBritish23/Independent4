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
      const age = new age(userAge);
      $("#mercuryYears").text(userAge.mercuryYears());
      $("#venusYears").text(userAge.venusYears());
      $("#marsYears").text(userAge.marsYears());
      $("#jupiterYears").text(userAge.jupiterYears());
      if (userAge < 99) {
        $("#young").text(userAge.lifeExpectancy(age));
      }else{
        return $("#old").text(userAge.lifeExpectancy(age));
      }
    }
  });
});
