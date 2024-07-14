function addNumbers(a,b)
{   
    result = a+b;
    console.log("Addition  result "+ result);
    return result;

}
//calll it
let res = addNumbers(2,5);
console.log(res);
//--------------
//Arrow functions 
const multiplyNumbers = (a,b) => {
    console.log("Multiplication result "+a*b);
    return a*b;
}
multiplyNumbers(2,5);
let multiplixationResult = multiplyNumbers(10,20);
console.log(multiplixationResult);

//example2

const printHellow = () => {
    console.log("Hellow world");
}

printHellow();

//------Count vowels in a word-----

function countVowels(str)
{
    let count = 0;
    for(let ch of str)
    {
        if(ch === 'a' || ch === 'e' || ch === 'i' 
            || ch === 'o' || ch === 'u' )
            {
                count++;
            }
    }
    return count;
}

const countVowelsArrowWay = (str) =>
{
    let count = 0;
    for(let ch of str)
    {
        if(ch === 'a' || ch === 'e' || ch === 'i' 
            || ch === 'o' || ch === 'u' )
            {
                count++;
            }
    }
    return count;
}



let input = "sambit"
let vowelscnt = countVowels(input);
let vowelsCntArrWay = countVowelsArrowWay(input);
console.log("Vowels in "+input+" is "+vowelscnt );
console.log("using arrow method "+vowelsCntArrWay);

//------For each in Arrays--------
console.log("------For each in Arrays--------");

let arr = [1,2,3,4,5];

arr.forEach((val,idx,arr) => {
    console.log("arr value at "+idx+" is "+ val);
});

 
//Print square of each numbers

arr.forEach((val) => {
    console.log("squares is " + val ** 2);
});

//Other array methods 
//map --> similar to for each loop but creates and return new array

let newArr = arr.map((val) => {
    return val;
});

console.log(newArr);

//filter

let oddNums  = arr.filter((val) => {
    return val % 2 !== 0;
});

console.log("Oddnumbers "+ oddNums);

//reduce
let arrsum = arr.reduce((res,curr) => {
    return res+curr;
});

console.log("sum of array"+arrsum);

//largest
let largest = arr.reduce((prev,curr) => {
return prev > curr ? prev : curr;
});

console.log("Largest in array is" +largest);




 