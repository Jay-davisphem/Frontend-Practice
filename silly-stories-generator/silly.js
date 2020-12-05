const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let tori = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let nTori = tori;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  nTori = nTori.replace(':insertx:',xItem);
  nTori = nTori.replace(':insertx:',xItem);
  nTori = nTori.replace(':inserty:',yItem);
  nTori = nTori.replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    nTori = nTori.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286) + ' stone';
    let temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    nTori = nTori.replace('94 fahrenheit',temperature);
    nTori = nTori.replace('300 pounds',weight);
  }

  story.textContent = nTori;
  story.style.visibility = 'visible';
}