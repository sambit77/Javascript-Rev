 const student = {
    fullName: "Rahul",
    age: 2,
    cgpa: 9.2,
    isPass: true
 };

 //student["age"] = student["age"] + 1;

 //console.log(student);

 //For-in loop

 for(let key in student)
 {
   console.log(key +" "+ student[key]);
 }

 //For-of loop

 /*let name = "sambit";

 for(let c of name)
 {
  console.log(c);
 }

 // for while do while 
 
 for( let i = 0 ; i < 5 ; i++)
 {
  //do-something
 }

 let x = 0;
 do{
  //do-somethin
  x++;
 }
 while(x <5);

 while(x > 0)
 {
  //do-something
  x--;
 }
 */