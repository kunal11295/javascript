// //Q1
// var array=[1,2,3,4,5]
// for(i=0;i<=array.length;i++)
// {
//     console.log(array[i]);
// }

//Q2
// var array=[1,2,3,4,5,6,7,8,9,10,11,12]
// var sum=0;

// for(i=1;i<array.length;i++)
// {
//     // console.log(i);
//     sum += array[i]
// //    sum=array[i];

// }  console.log(sum);

//Q3
// var array=[1,2,3,4,5,6,88,55];
// var max=0;
// for(i=0;i<=array.length;i++)
// {
//     if(array[i]>max)
//     max=array[i];
//     // array[i]=max;

// }
// console.log(max);

// //Q4
// var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var num=10;
// for(i=0;i<=array.length;i++)
// {
//     if(num==array[i])
//     console.log(i);
// }

// //Q5
// var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// var sum=0;
// var b;
// for(i=0;i<array.length;i++)
// {
//     sum +=i
// // console.log(sum);
//    b=sum/array.length;

// }console.log(b);

//Q6
// var array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// var num=16;
// for(i=0;i<array.length;i++)
// {
//     if(num==array[i])
//     console.log(i);
// }

// //Q7
// var array=[1,2,3,4,5,6,7,8,9,10,11,12]
// var mult=1;

// for(i=0;i<array.length;i++)
// {
//     mult=mult*array[i];
// }console.log(mult);

//Q8
// var array=[199,27,9,55,88,110]
// var min=array[0];
// for(i=0;i<array.length;i++)
// {
//     if(array[i]<min)
//     {
//         min=array[i];
//     }
// }console.log(min);

//Q9
// var array=[1,2,3,4,5,6]
// var b=4
// for(i=0;i<array.length;i++)
// {
//     if(b==array[i])
//     {
//         console.log(b);
//     }
// }

//Q10
 var array=[100,22,3,40,5];

 for( var i=0;i<array.length;i++)
 {
    for(var j=i+1;j<array.length;j++)
    {
        if(array[i]>array[j])
        {
       var  temp=array[i];
        array[i]=array[j]
        array[j]=temp;
        }
    }
 } console.log(array);





// // //Q1
// var array=[1.2,2.2,3.5]
// console.log(array[0]+array[array.length-1]);

// // //Q2
// var string="kunal"
//  function reversestring(str)
//  {
//     var newstring="";
//     for(i=str.length-1;i>=0;i--)
//     {
//         newstring+=str[i];

//     }
//     return newstring;

//  } 
// var result=reversestring(string);
// console.log(result);

var array=["kunal","anu","abhi"];

for(i=0;i<array.length;i++)
{
    var str=array[i];
    var rev="";
    for(var j=str.length-1;j>=0;j--)
    {
        rev=rev+str[j];
       
    }console.log(rev);
}
var empty=[];
empty.push(rev);
console.log(empty);

//Q3
// var array=[1,2,3,4,5,6,7,8]
// // var sum;
// for(i=0;i<array.length;i++)
// {
//     if(array[i] % 2==0)
//     {
//         console.log(array[i]);
//     }
// }

//Q4
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     console.log(array[i]);
//     array[i] = 0;
//   } console.log(array[i]);
// }

//Q5
// var a=[1,2,3,4,5,6]
// var b=[5,6,7,8,9,10]
// var c;

// for(i=0;i<a.length;i++)
// {       
//      c=a[i]+b[i]
//     console.log(c);
// }