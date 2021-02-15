const input = document.querySelector("input");
const enterBtn = document.querySelector('button');
const listItem = document.querySelector('ul');
enterBtn.onclick = function (){
  let item = input.value;
  let span = document.createElement('span');
  let li = document.createElement('li');
  span.textContent = item;
  let delBtn = document.createElement('button');

  delBtn.textContent = 'delete';
  li.appendChild(span);
  li.appendChild(delBtn);
  listItem.appendChild(li);
  delBtn.addEventListener('click', () => {
    listItem.removeChild(li);
    input.focus();
  });
  input.value = '';
  input.focus();
};
