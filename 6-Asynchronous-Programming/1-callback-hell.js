//ASynchronous flow
// console.log("one");
// console.log("two");
// setTimeout(()=> {
//     console.log("waited function");     
// },5000);
// console.log("three");
// console.log("four");
//Output -> one , two, three, four, waited function

//Call back function (function passed as an arg to another fuunction)
function sum(a,b)
{
    console.log(a+b);
}
function calc(a,b,sum) {
    sum(a,b);
}
//calc(2,5,sum);

//-------CALL BACK HELL (Nested callbacks)-------

function getData(data,getNextData) 
{
    setTimeout(()=>{
        console.log("data "+data);
        if(getNextData)
        {
            getNextData();
        }
    },3000);
}

//data 1 -> data 2 -> data 3 (all will return at same time)
// getData(1);
// getData(2);
// getData(3);

//data 1 -delay-> data 2 -delay-> data 3 (delayed return)
getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});
