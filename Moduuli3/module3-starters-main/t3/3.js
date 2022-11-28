'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let i of names) {
    document.getElementById("target").innerHTML += `<li>${i}</li>\n` ;
}