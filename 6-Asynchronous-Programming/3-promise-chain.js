function asyncFunc()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data-1");
            resolve("success");
        },4000);
    });
}

function asyncFunc2()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data-2");
            resolve("success");
        },4000);
    });
}

//Parallel promise resolutions for data-1 and data-2
// console.log("Feteching data-1...");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("Feteching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });

//Sequential promise resolution (Promise chaining)
console.log("Feteching data-1...");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
    console.log("Fetching data-2...")
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});

//consolidated way
// console.log("Feteching data-1...");
// asyncFunc().then((res) => {
//     console.log(res);
//     console.log("Fetching data-2...")
//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// });

//--calaback hell example problem uusing promise chain

function getData(data) 
{
   return new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("data "+data);
        resolve("success");
    },3000);
    
   });
}

//Promise chaining s
// getData(1).then((res) => {
//     console.log("first resulr"+res);
//     getData(2).then((res)=> {
//        console.log("Second res" + res); 
//     });
// });

getData(1).then((res => {
    return getData(2);
}))
.then((res) => {
    return getData(3);
})
.then((res)=> {
    console.log(res);
});
