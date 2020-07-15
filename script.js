$(document).ready(function(){
$(".saveBtn").on("click",function(){
    console.log("buttonclick");
var value= $(this).siblings(".description").val();

var time= $(this).parent().attr("id");
localStorage.setItem(time,value);

});
///need a function to change color
///need an interval to change it periodically 
///need to tell what time it is 
///change the day / check acitivties on changing classses with jquery on google

var currentHour=moment().hours()
console.log(currentHour)


$("#timeHour").text(moment().format("MMMM, Do, YYYY"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

});
