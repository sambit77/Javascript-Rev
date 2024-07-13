let marks = [10,20,30,40,50];

console.log(marks.length);

marks[1] = 22;
for(let i = 0 ; i < marks.length ; i++)
{
    console.log("mark "+i+" is "+marks[i]);
}