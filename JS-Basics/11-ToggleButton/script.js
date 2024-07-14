let modeBtn = document.querySelector("#mode");

let currMode = "light";
// modeBtn.addEventListener("click",() => {
//     if(currMode === "light")
//     {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });

//approach 2 using style classes 
modeBtn.addEventListener("click",() => {
    if(currMode === "light")
    {
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else{
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});