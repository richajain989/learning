//SUM FUNCTION
// function sum(){
//     var a = 2;
//     var b = 8;
//     var c = a+b;
//     console.log(c);
// } 
// sum()

//SUM FUNCTION WITH DYNAMICARGUMENT
// function sum(a,b){
//     var c= a+b;
//     console.log(c);
// }
// sum(4,8)
// sum(12,8)

// function subt(){
//     var x = 1;
//     var y = 5;
//     var z = x-y;
//     console.log(z);
// }
// subt()


// function subt(x,y){
//     var z = x-y;
// console.log(z);
// }
// subt(5,7)

// Multiplication
// function mult(p,q){
//     var r = p*q;
//     console.log(r);
// }
// mult(4,5)

// DIVIDE

/*
write a program of divide in which x is the divident and y is the divisor, 
and put a condition where y should be greater than 0. and if y =0 then 
print "enter the value greater than 0"*/

function divd(l,m){
var p = l/m;
if(m==0){
    console.log("Please enter the value greater then zero");
}
else{
    console.log(p)
}
}

divd(16,4)
divd(35,7)
divd(12,0)

