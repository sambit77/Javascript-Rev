

//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".finalMessage");

//Api call to get exchange rate and update rate
const updateExxchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if(amtVal === "" || amtVal < 1)
    {
        amtVal=1;
        amount.value =1;
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    
    let data = await response.json();
    console.log(data);

    let rates = data[fromCurr.value.toLowerCase()];
    let rate = rates[toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amtVal * rate;

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
} ;


//Populate options
for(let select of dropdowns)
{
    for (currCode in countryList)
        {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if(select.name === "from" && currCode === "USD")
            {
                newOption.selected = "selected";
            }

            if(select.name === "to" && currCode === "INR")
            {
                    newOption.selected = "selected";
            }

            select.append(newOption);


        }
        select.addEventListener("change", (evt) => {
            updateFlag(evt.target);
        });
}

//Populate flag icons according to options
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};

//Call exchange method when button is clicked
btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    updateExxchangeRate();
    

});

//call exchange method when window is loaded for first time
window.addEventListener("load", () => {
    updateExxchangeRate();
});



