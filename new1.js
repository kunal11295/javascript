console.log("outside function")
// /function functionname("parameter")
{

}

function add()
{
var a=1;
var b=2;
console.log(a+b)
}
add();

function sub()
{
    var a=1;
    var b=2;
    console.log(a-b)
}
sub();

function mul()
{
    var a=4;
    var b=3;
    console.log(a*b)

}
mul();

function div()
{
    var a=15;
    var b=3;
    console.log(a/b)

}
div();
function mod()
{
    var a=15;
    var b=3;
    console.log(a % b)

}
mod();

var a=2;
var b=4;
function multi(k,a)
{
    return k - a;
}
 console.log(multi(a,b));
 var aa=multi(a,b);
 console.log(aa,"aa")

var a=876;
var b=9876;
function greater()
{
    if(a > b)
    {
    return a;
    }
    else
    {
     return b;
    }
}
console.log(greater(a,b));

// var a=2;
// var b=4;
// function greater(a,b)
// {

// var bigger;

//     if(a>b)
//     {
//         bigger=a;
//     }
//     else{
//         bigger=b;
//     }
//     bigger=bigger*2;
//     return bigger;
// }
// console.log(greater(a,b))

// 1;
// var a = 234;
// function add(a) {
//   if (a % 2 == 0) {
//    return "print even"
//   } else {
//     return "print odd"
//   }
// }
// console.log(add(a));

// 2;
// var num1 = 5;
// var num2 = 10;
// function sub(num1, num2) {
//   if (5 >= 10) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(sub(num1, num2));
// var num1 = 15;
// var num2 = 20;
// var num3 = 40;
// function largest(num1, num2, num3) {
//   if (15 >= 20 && 15 >= 20) {
//     return num1;
//   } else if (20 >= 15 && 20 >= 40) {
//     return num2;
//   } else {
//     return num3;
//   }
// }
// console.log(largest(num1, num2, num3));
// 4;
// var num = 10;
// range = 5 - 20;
// function dd(num) {
//   if (5 <= 10 && 10 <= 20) {
//     return "print in range"
//   } else {
//     return "print number is not in range"
//   }
// }
// console.log(dd(num));
