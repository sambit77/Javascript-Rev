
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact_para");
const myBtn = document.querySelector("#mybtn");



// let promise = fetch(URL);
// console.log(promise);

//Using Asycn Await
const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL); //by default get request 
    //console.log(response.status);
    console.log(response);

    let data = await response.json();
    //console.log(data);
    //console.log(data[0]);
    let fact1= data[0].text;
    console.log(fact1);
    factPara.innerText = data[0].text;
};

//Using Promise chaining 

// function getFacts() {
//     fetch(URL)
//     .then((response)=> {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[0].text;
//     });
// }



//getFacts();
myBtn.addEventListener("click",getFacts);