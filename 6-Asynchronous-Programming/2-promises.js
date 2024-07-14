//PRmoises sample structure
let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    resolve("success");
    //reject("some error occured");
});

//Function calls returning promise in different states
//initiall a unfulfilled promise will be returned when we call data(123) 
//after sometime a fulfilled promise will be returned

//dummy api returning a success response using Promise
function getData(dataId, getNextData)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data "+dataId);
            resolve("success");
            if(getNextData)
            {
                getNextData();
            }
        },5000);
    });
}

//dummy api for rejected response using Promise
function getData2(dataId, getNextData)
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data "+dataId);
            reject("error detailss");
            if(getNextData)
            {
                getNextData();
            }
        },5000);
    });
}

//Handling promises for success and failure promises 

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve("success");
        //reject("network error bhai");
    });
}

//Handling promises 

let myPromise = getPromise();

//Only be executed if promise is fulfilled 
myPromise.then((res) => {
    console.log("Promise fulfilled "+res);
});

//only be executed if promise is rejected
myPromise.catch((err) => {
    console.log("rejected with error msg "+ err);
})

