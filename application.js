//Get Random number
var number = Math.floor(Math.random() * 101);
 console.log(number);
//This takes the value of the what the user submitted
function getguess(){
 var userNum = $('#guess').value;
}
var difference = function (a, b){ return Math.abs(a - b); }
//This compares number and lets user know if they are hot or cold
var compareNumber = function(userNum, number){
  if(userNum == number){
  console.log('#winner');
  $('#winner').show();
  }else if (difference(userNum,number) < 5){
  alert("Very Hot!"); 
  }
  else if(difference(userNum,number) < 10){
  alert("Hot!");  
  }
  else if(difference(userNum,number) < 20){
  alert("Warm!"); 
  }
  else if(difference(userNum,number) > 20){
  alert("Very Cold!");  
  }
  else {
  alert("Sorry, you need to choose a number.");  
  }

};
//Submit button gets number and compares number with random number
$(document).ready(function () {
 $("#gameForm").on("submit", function(e){
 	e.preventDefault();
 	// console.log("form submit attempted");
 });
 $('#Submit').click(function () {
 	userNum = $("#guess").val();
 	console.log('userGuess: ' + userNum );
 	compareNumber(userNum, number);
 	 
 	 
 });
 //reload page
 	$('#NewGame').click(function () {
 	location.reload();
 	});
});	// End of document ready