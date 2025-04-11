let min = document.getElementById("min");
let sec = document.getElementById("sec");
let hour = document.getElementById("hour");

currentMin=0;
currentSec=0;
currentHour=0;
 setInterval(()=>{
  hour.innerText=currentHour;
  min.innerText=currentMin;
  sec.innerText=currentSec;
  currentSec++;
  if(currentSec>60){
    currentSec=1;
    currentMin++;
  }
  if(currentMin>60){
    currentMin=0;
    currentHour++;
  }
  if(currentHour>24){
    currentHour=0;
  }
 },500)