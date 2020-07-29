import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {UserAge} from './age.js';

$(document).ready(function(){
  $("form#Age1").submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($("#userAge").val());
    console.log(userAge);
    if((Math.ceil(userAge))-userAge !==0 || userAge<0){
      alert("please enter valid age");
    } else {
      const age = new UserAge(userAge);
      age.calculateAges();
      age.calculateLife();
      console.log(age);
      $("#mercOut").text("Your age on Mercury is" + " " + age.mercuryYears);
      $("#mercLife").text("You have this long left on Mercury" + " " + age.mercuryExpectancy);
      $("#venOut").text("Your age on Venus is" + " " + age.venusYears);
      $("#venLife").text("You have this long left on Venus" + " " + age.venusExpectancy);
      $("#marOut").text("Your age on Mars is" + " " + age.marsYears);
      $("#marLife").text("You have this long left on Mars" + " " + age.marsExpectancy);
      $("#jupitOut").text("Your age on Jupiter is" + " " + age.jupiterYears);
      $("#jupitLife").text("You have this long left on Jupiter" + " " + age.jupiterExpectancy);
      // if (userAge < 100) {
      //   $("#young").text(age.averagelifeExpectancy(userAge));
      // } else {
      //   return $("#old").text(age.averagelifeExpectancy(userAge));
      // }
    }
  });
});
