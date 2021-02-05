const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const clock = document.querySelector('.clock');
let startTime;
let stopWatch;

function use(num){
  return (num < 10) ? '0' + num : num;
}

function displayCount(){
  let seconds = (Date.now() - startTime) / 1000
  let hours = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = Math.floor(seconds % 60);

  clock.textContent = `${use(hours)} : ${use(min)} : ${use(sec)}`;
  //setTimeout(displayCount, 1000)
}
start.onclick = function(){
  startTime = new Date();
  stopWatch = setInterval(displayCount, 1000);
  start.disabled = true;
};

stop.onclick = function (){
  clearInterval(stopWatch);
  start.disabled = false;
}

reset.onclick = function(){
  clearInterval(stopWatch);
  start.disabled = false;
  startTime = Date.now();
  displayCount();
}
