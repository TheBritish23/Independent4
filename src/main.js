import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form#userSpace").submit(function(event) {
    event.preventDefault();
    const userSpace = parseInt($("#userAge").val());
    if (Math.ceil()) {
      alert("Invalid Input, *****!");
    }
}
