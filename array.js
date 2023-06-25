// var array=[1,2,3,4,5,6,7,8,9,0,09,87,89,34,45];
// array.push("kunal");
// // array.pop();
// array.shift();
// array.unshift(24,"kunal");
// console.log(array,"array");
// console.log(array.length," lenght of array");

var studentlist=[ "kunal","poonam","anu","krishna","vrushab","naval","swaraj"];
console.log(studentlist[2]);

console.log(studentlist.length)
for(var i=0;i<studentlist;i++)
{
    console.log(studentlist[i],i)
}

for(var i=0;i < studentlist.length ;i++)
{
    if(studentlist[i] == "Naval")
    {
 console.log("print naval is in data")
 
}
}



var flagforswaraj=false;
{
    if(studentlist[i] == "swaraj")
    {
        flagforswaraj=true;
 console.log("print naval is in data")
 
}
}
if (flagofswaraj=false)
{
    console.log("swaraj is not in data")
}

for(var i=0;i < studentlist.length ;i++)
{
    if(studentlist[i] == "swaraj" || studentlist[i] == "kunal" )
    {
 console.log("print swaraj and kunal is in data")
 
}
}




var fruits=["mango","grape","banana","watermelon"];
console.log[0];
console.log[1];
console.log[2];
console.log[fruits.length];
for(i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
}

var flag=false;
for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i])
if( fruits[i]  == "orange")
{
    flag=true;
}
console.log("flag is here" ,flag)
if (flag=false)
{
    console.log("orange is not in array")
    
}else
{
    console.log("orange is in array")
}

}
 var arr=[89,72,73,96,98,99]
{
    console.log(arr.length);
}
function findmax(arr)
{
var max = arr[0];
for(var i=1;i < arr.length;i++)
{
if(arr[i] > max)
{
    max=arr[i];
}

}return max;
}
var arr=[89,72,73,96,98,99]
console.log(findmax(arr));


function findmin(arr)
{
var min=arr[0];
for(var i=1;i<6;i++)
{
    if(arr[i]< min)
    {
        min=arr[i];
    }
}
return min;
}
var arr=[89,72,73,96,98,99];
console.log(findmin(arr));