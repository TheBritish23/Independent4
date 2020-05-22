import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {userAge} from "./age.js";

$(document).ready(function(){
  $("form#Age1").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("#userAge").val());
    if (Math.ceil(userAge)-userAge) {
      alert("Invalid Input, *****!");
    } else {
      const age = new age(userAge);
      $("#mercuryYears").text(age.mercuryYears());
      $("#venusYears").text(age.venusYears());
      $("#marsYears").text(age.marsYears());
      $("#jupiterYears").text(age.jupiterYears());
      if (userAge < 99) {
        $("#young").text(age.lifeExpectancy(userAge));
      }else{
        return $("#old").text(age.lifeExpectancy(userAge));
      }
    }
  });
});
