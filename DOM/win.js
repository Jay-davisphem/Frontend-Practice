const div = document.querySelector('div');
let winWidth = window.innerWidth;
let winHeight= window.innerHeight;
div.style.width = winWidth + 'px';
div.style.height = winHeight + 'px';

window.addEventListener('resize', func);
function func(){
  winWidth = window.innerWidth;
  winHeight= window.innerHeight;
  div.style.width = winWidth + 'px';
  div.style.height = winHeight + 'px';
}
