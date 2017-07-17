//create variable that gets current time
//create function that changes displayed time based on current time
//create if loop that changes color based on time
//output all functions to html

var myTime = setInterval(function(){displayTime() }, 1000);

function displayTime(){
	var newDate = new Date().toTimeString();
	var timeShort = newDate.substring(0, 8).split(':').join("");
	document.body.style.backgroundColor = '#' + timeShort
	document.getElementById('time').innerHTML = '#' + timeShort	
}




