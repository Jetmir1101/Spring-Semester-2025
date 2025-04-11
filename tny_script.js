"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Jetmir Selami
   Date:   4/11/25

*/

/* display date and time */
document.getElementById("dateNow").innerHTML = 
"m/d/y<br />h:m:s";

window.alert("Welcome to Tulsa");

/*display the time left until new years eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";
runClock();
setInterval("runClock()",1000);

function runClock (){

	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	document.getElementById("dateNow").innerHTML = 
	dateStr + "<br />" + timeStr;

	var newYear = new Date("January 1, 2021");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/(1000*60*60*24);

	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

	/*calculate the minutes and seconds left in the current hour */

	var minsLeft = (hrsLeft -Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft -Math.floor(minsLeft))*60;

	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}



