//get attributes and set attributes

let div = document.querySelector("div");
let divName = div.getAttribute("name");
let divId = div.getAttribute("id");

console.log("div name "+divName+" and div Id "+divId);
div.setAttribute("name", "Pratahma div");
divName = div.getAttribute("name");
console.log("div name "+divName+" and div Id "+divId);

//modifying styles 
div.style.backgroundColor= "green";

//Add a button

let newBtn = document.createElement("button");
newBtn.innerText = "my button";
div.append(newBtn);

div.prepend(newBtn);

div.before(newBtn);

div.after(newBtn);


