// run on console -
// document
// document.location
// document.title
// document.URL 
// document.script
// document.links
// document.images
// document.domain

// Dom manipulation
let element1 = document.getElementById('btn');
console.log(element1);

let element2 = document.getElementsByClassName('para');
console.log(element2);
element2[0].style.background = "blue";
element2[0].classList.add("para");
element2[0].classList.remove("text");

let element3 = document.getElementsByTagName('div');
console.log(element3);

newElement1 = document.createElement('p');
newElement1.innerText = "This is newly created element 1";
element3[0].appendChild(newElement1);
newElement2 = document.createElement('b');
newElement2.innerText = "This is newly created element 2";
newElement2.style.color = 'white';
element3[0].replaceChild(newElement2, newElement1);

// 2:23:41



