var metronomeSide = false;
var isPlaying = false;
var isRepeating = true;

document.getElementById("repeatPlay").src="./img/loop.svg";
document.getElementById("playPauseButton").src="./img/play.svg";

document.getElementById("metronomeButton").addEventListener("click", function(){
  if(!metronomeSide){
    document.getElementById("mySidenav").style.width = "250px";
    metronomeSide = true;
  }
  else{
    document.getElementById("mySidenav").style.width = "0";
    metronomeSide = false;
  }
});
    


function closeNav(){
  if(metronomeSide){
    document.getElementById("mySidenav").style.width = "0";
    metronomeSide = false;
}
}

document.getElementById("playPauseButton").addEventListener("click", function(e){
  var target = e.target;

  if (!isPlaying){
    document.getElementById("playPauseButton").src="./img/pause.svg";
    isPlaying = true;
  }
  else{
    document.getElementById("playPauseButton").src="./img/play.svg";
    isPlaying = false;
  }

});


document.getElementById("repeatPlay").addEventListener("click", function(){

  if (!isRepeating){
    document.getElementById("repeatPlay").src="./img/loop.svg";
    isRepeating = true;
  }
  else{
    document.getElementById("repeatPlay").src="./img/arrow.svg";
    isRepeating = false;
  }

});