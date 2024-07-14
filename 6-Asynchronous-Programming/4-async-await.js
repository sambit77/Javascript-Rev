//Basic async function (It always returns promise)
async function hello() 
{
    console.log("hello");
}

//async - await example

//an api function which takes 5 seconds to return weather data
function api()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },5000);

    });
}

async function getWeatherData()
{
  await api();  //1st api call
  await api(); // 2nd call waits till completion of first call
}

//function call
//getWeatherData();

//Resolving our getData problem uusing async await
function getData(data) 
{
   return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("data "+data);
        resolve("success");
    },3000);
    
   });
}

async function getAllData()
{
    console.log("getting data-1....")
    await getData(1);
    console.log("getting data-2....")
    await getData(2);
    console.log("getting data-3....")
    await getData(3);
}

//adiitional function call
//getAllData();

//using IIFE to get rid of one additional function call

(async () =>
{
    console.log("getting data-1....")
    await getData(1);
    console.log("getting data-2....")
    await getData(2);
    console.log("getting data-3....")
    await getData(3);
})();
