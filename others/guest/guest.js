const people = ['Chris', 'Anne', 'Colin', 'Terri',
                'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admit = document.querySelector('.admitted');
const refuse = document.querySelector('.refused');
function print() {
  let ac = '';
  let rej = '';
  for (let i=0; i<people.length; ++i){
    if (people[i] === 'Lola' || people[i] === 'Phil')
      rej += people[i] + ', ';
    else
      ac += people[i] + ', ';
  }
  ac = ac.slice(0, ac.length - 2) + '.';
  rej = rej.slice(0, rej.length - 2) + '.';
  refuse.textContent = `Refused people: ${rej}`;
  admit.textContent = `Admitted people: ${ac}`;
}
print();
