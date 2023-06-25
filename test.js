1
var num=234;
if(num % 2 == 0)
{ 
console.log("print even")
}
else
{
    console.log("print odd")
}

2
var num1=5;
var num2=10;
if(5 >= 10)
{
    console.log("print largest number1")
}
else
{
    console.log("print largest number2")
}
3
var num1=15;
var num2=20;
var num3=40;
if(15 >= 20 && 15 >= 20)
{
    console.log("print largest number2")
}
else if(20>=15 && 20>=40)
{
    console.log("print largest number2")
}
else
{
 console.log("print num3")
}
4
var num=10;
range=5-20;
if(5<=10 && 10<=20)
{
console.log("print number is in range")
}
else
{
    console.log("print number is not in range")
}


// switch
var num=234;
switch(true)
{
    case(num %2 == 0):
    console.log("print even")
    break;
    case (num %2 != 0):
     console.log("print odd")
     break;
     default:
     console.log ("invalid")  
}
2
var num=5;
var num=10;
switch(true)
{
    case(5>=10):
    console.log("print largest number1")
    break;
    case(10>=5):
    console.log("print largest number2")
    break;
    default:
        console.log("invalid")
}
3
var num=15;
var num=20;
var num=40;
switch(true)
{
    case(15>=20 && 15>=40):
    console.log("print num1")
    break;
    case(20>=15 && 20>=40):
    console.log("print num2")
    break;
    case(40>=15 && 40>=20):
    console.log("print num3")
    break;
    default:
        console.log("invalid")
}
4
var num=10;
switch(true)
{
    case(10<=5 && 10>=20) :
    console.log("print number is not range")
    break;
    case (10>=5 && 10<=20):
    console.log("print number is in range")
    break;
    default:
        console.log("invalid")
}