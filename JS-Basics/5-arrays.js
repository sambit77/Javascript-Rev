let marks = [10,20,30,40,50];

console.log(marks.length);

marks[1] = 22;
for(let i = 0 ; i < marks.length ; i++)
{
    console.log("mark "+i+" is "+marks[i]);
}

let sum = 0;
for(let mark of marks)
{
    sum = sum + mark;
}

let avg = sum / marks.length;

console.log("Average marks "+ avg);

//arrays methods
console.log("---------------Arrasy Methods----------");

//add to start
marks.push(100);
marks.push(200);

console.log(marks.toString());
//delete from end
console.log("last element to be deleted "+ marks.pop());

console.log("after pop");
console.log(marks);

//other methods
//arr1.concat(arr2)

//add to the beginning
marks.unshift(2024);
console.log(marks.toString());


//sliced array
let slicedarr = marks.slice(2,4);
console.log("Sliced array "+slicedarr);

//create a copy of array
let copyarray = marks.slice();

//Splice (changes the origin al array)
//Can be used to add , remove modift arr
//splice(startIdx,delcount,999,99);

marks.splice(2,3,99,99,999);
console.log(marks.toString());



