number=123456789;
result=0;
result=Number(String(number).split("").reverse("").join(""))
console.log(result);


// num=12345;
// reversed=0;
// for(; num!==0;num=Math.floor(num/10))
// {
//     reversed=reversed *10+(num%10);
// }
// console.log(reversed);   


// var num1=100;
// var num2=200;
// var num3=300;
// function order(a,b,c)
// {
//     if(a>b && a>c)
//     {
//         console.log("print  descending order");
//     }
//     else if(b<a && b<c)
//     {
//         console.log("print ascending order");
//     }
//     else
//     {
//         console.log("neither");
//     }
// }
// order(num1,num2,num3);

// var z="hello";
// function add(z)
// {
//     if(z=="hello")
//     {
//         console.log("print true");
//     }
//     else
//     {
//         console.log("print false");
//     }
// }
// add(z);

// var array=[2,4,6,8,10,12]
// for(i=0;i<=array.length;i++)
// {

// }

var array=[9,8,21,27,97,339,41]
    var min=array[0]
    for(i=0;i<=array.length;i++)
    {
        if(array[i]<min)
        {
            min=array[i];
        }
    }
    console.log(min);
