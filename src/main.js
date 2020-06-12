import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {userAge} from "./age.js";

$(document).ready(function(){
  $("form#Age1").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("#userAge").val());
    if (Math.ceil(userAge)-userAge !==0 || userAge<0){
      // alert("Invalid Input, *****!");
    } else {
      const age = new userAge(age);
      $("#mercuryYears").text(age.userAge());
      $("#venusYears").text(age.userAge());
      $("#marsYears").text(age.userAge());
      $("#jupiterYears").text(age.userAge());
      if (userAge < 99) {
        $("#young").text(age.lifeExpectancy(userAge));
      } else {
        return $("#old").text(age.lifeExpectancy(userAge));
      }
    }
  });
});
