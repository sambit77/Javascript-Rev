//Strings

let str1 = "Sambit";
let str2 = 'pradhan';

console.log("string 1 length "+ str1.length);
console.log("char at second place in str1 " + str1[1]);

//Template literals



let sentence = `This is a template literal`;

console.log(sentence);

let obj = {
    name: "pen",
    price: 10,
}

console.log("the cost of "+ obj.name+" is "+ obj.price);

let output = `the cost of ${obj.name} is ${obj.price}`;
console.log(output);

str1_caps = str1.toUpperCase();
console.log(str1_caps);

//Other functions
str1.slice(1,3);
str1.concat(str2);
str1.trim();
str1.charAt(0);
str1.replace("s","g");