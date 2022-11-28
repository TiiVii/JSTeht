'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

document.body.onload = addElement;

function addElement() {
  let div = document.getElementById("target");
  for (let i of students) {
    const option = document.createElement('option')
    option.value = i.id;
    option.appendChild(document.createTextNode(i.name))
    div.appendChild(option);
}
}