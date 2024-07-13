let divs = document.querySelectorAll("div");

let count = 1;
for(d of divs)
{
    d.innerText = `div with serial ${count}`;
    count++;
}