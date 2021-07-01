//HOW TO MAKE FUNCTION
// function myfunction(a,b){
//     return a*b;  
// }
// var x = myfunction(4,5);
// console.log(x);//20


/*FUNCTION EXPRESSION (A function without name, this is anonymous function.function expression 
can stored in a variable).*/
// let a = function (b, c){
//     return b+c;
// }
// let d = a(4,7);
// console.log(d); //11

/*SELF INVOKING FUNCTION (function can invoke autumatically we can declear
 with function name or not it will calling without defined name )*/
// (function (){
// console.log( "hi");
// })
// ();//hi

//FUNCTION USED AS VALUE
// function myfunction(a,b){
//    return a+b;

// let  c = myfunction (2,4)*2;
// console.log(c);//12
// }

// var a = function (a,b){
//     return a*b;
// }; 
// a(1,2);
// console.log(a(1,2));//2

//LENGTH OF ARGUMENT
// function myfunction(){
//     console.log(arguments);
//     return arguments.length;
// }
// let aa = myfunction(1,2,3,4,5)

// console.log(aa);//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
                  //5   

/*toString() method returns the function as a string(means to know the definition of the 
function then we can use the toString)*/
// function myfunction(a,b){
//     return a+b;
// }
// let c = myfunction.toString();
// console.log(c);//function myfunction(a,b){
                // return a+b;
                 // }
      
/*ARROW=NO NEED TO WRITE A FUNCTION OR FUNCTION NAME,RETURN & {}(curly brackets) KEYWORD. 
USE ONLY ARROW => IT WILL TAKES ALL DECLARATIONS AUTOMATICALLY*/
// const a = (x,y) => x+y;
// console.log(a(2,3));//5

// const aa = (a,b) => a*b;
// console.log(aa(4,6));//24

// //DEFAULT PARAMETER VALUE(if m not giving the value of one parameter then it WILL ASIGNed to THE another parametr)
// function myfunction(x,y=2){
//     return x*y;
// }
// let z = myfunction(4);
// console.log(z);//8 (y=2 as above declaration and calling time passed only one value so it will assigned to x,so x=4)

// const z = (x,y=2) => x+y;
// console.log(z(4));//6

//ARGUMENT object PARAMETERS(sum all the input values)
// function myfunction(){
//     var sum =0;
//     for(let i=0; i<arguments.length;i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(myfunction(1,2,3,4));//10


//FIND HE SQURE ROOT(Math.sqrt)
// var a = Math.sqrt(9);
// console.log(a);//3 (if m giving minus value and string then result will NaN)

//SWAP THE VARIABLES
// let a =2;
// let b =3;
// let swp =0;
// swp = a;
// a=b;
// b=a;
// console.log("now sawaped value of a is  " +a+" and the value of b is " +b);//now sawaped value of a is  3 and the value of b is 2
