const inp = document.getElementById('set');
const output = document.querySelector('.output');
const send = document.querySelector('button');

send.addEventListener('click', reset);
send.addEventListener('click', cre);
function cre() {
  for (let i=inp.value; i>=0; --i){
    let para = document.createElement('p');
    if (i === inp.value)
      para.textContent = `Countdown ${i}`;
    else if (i === 0)
      para.textContent = `Blast Off`;
    else
      para.textContent = i;
    output.appendChild(para);
  }
}
function reset(){
  let paras = document.querySelectorAll('.output p');
  for (let i=0; i<paras.length; ++i){
    paras[i].textContent = '';
  }
}
