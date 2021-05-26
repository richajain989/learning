//simple function

// function myFunction(p1,p2){
    
//     return p1*p2;
// }
// var result = myFunction(4,3)
// console.log(result);//12
// console.log(myFunction(4,3));//12

//STRING FUNCTION
//1=indexOf()(to know the current postion of the string)

//var a = "'hi' i am richa";
//console.log(a.indexOf("hi"));//1
//console.log(a.lastIndexOf("richa"));//10(to gret last no.of particular string)
//console.log(a.indexOf("jain"));//minus one (if string is not found then shows minus 1)
//console.log(a.indexOf("richa",4));//10
//console.log(a.search("richa"));//10

//2=slice() to breaken the string and show the result btwn starting to end no

var x = "richa,kshitij,jain";
//console.log(x.slice(6,12));//kshiti
//console.log(x.slice(6));//kshitijjiain
//console.log(x.replace("richa","kashvi"));//kashvi,kshitij,jain
console.log(/richa/g , "lala");