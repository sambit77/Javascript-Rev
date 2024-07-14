let btn2 = document.getElementById("btn2");
console.log(btn2);

// btn2.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// };

//Doing the above using event listeners 

btn2.addEventListener("click",() => {
     console.log("btn2 clicked");
});

const handler2 = (evt) => {
    console.log("btn2 clicked - handler 2");
    //console.log(evt);
    //console.log(evt.type);
};
btn2.addEventListener("click",handler2);
btn2.removeEventListener("click",handler2);

let box = document.getElementById("box");

box.onmouseover = () => {
    console.log("Mouse over");
};