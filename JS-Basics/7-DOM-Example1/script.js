console.log("Hellow");
//Prints html
// console.log(document);
console.dir(document);
//document.body.style.background = "green";//
//document.body.childNodes[1].innerText = "abcd";

//Dom manipulation

//selection by id
let val = document.getElementById("heading");
console.log(val);
//selection by class
let mytext = document.getElementsByClassName("demo");
console.dir(mytext);
console.log(mytext);
//selection by tag
let allptags = document.getElementsByTagName("p");
console.dir(allptags);
//Query selector
//document.querySelector("class/id/tag"); return first element
//document.querySelectorAll("id/class/tag") return a node of all matching 

//Properties tagName, innerText, innerHTML, textContent(shows text for hidden element)

let firstPTag = document.querySelector("p");
console.log(firstPTag.tagName);
console.log(firstPTag.innerHTML);

firstPTag.innerText = "changed content fron JS...";
firstPTag.innerHTML = "<h5>content changed</h5>";

