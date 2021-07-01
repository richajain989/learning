//simple function

// function myFunction(p1,p2){
    
//     return p1*p2;
// }
// var result = myFunction(4,3)
// console.log(result);//12
// console.log(myFunction(4,3));//12

//STRING FUNCTION
//1=indexOf()(to know the current postion of the string)

var a = "hi i am richa";
//console.log(a.indexOf("hi"));//1
//console.log(a.lastIndexOf("richa"));//10(to gret last no.of particular string)
//console.log(a.indexOf("jain"));//minus one (if string is not found then shows minus 1)
//console.log(a.indexOf("i",2));//3 locate the first occurrence of the letter "i", starting the search at position 2
//console.log(a.search("richa"));//10

//2=slice() to breaken the string and show the result btwn starting to end no

//var x = "richa,kshitij,jain";
//console.log(x.slice(6,12));//kshiti
//console.log(x.slice(6));//kshitijjiain
//console.log(x.replace("richa","kashvi"));//kashvi,kshitij,jain

//3=STRING CONCATE(add two or more strings)
// var a = "richa";
// var b = "jain";
// var c = "kshitij"
// var d = a.concat(" ",b," ",c);
// console.log(d);//richa jain kshitij(if space " " are not using then string will print without space like=richajainkshitj)
// var a = "richa"+ " "+ "jain"+" "+"kshitij";
// console.log(a);//richa jain kshitij(+operator will also add the string means without concat function we can add)

//4=TRIM FUNCTION
// var a = "      hello     ";
// console.log(a.trim());//hello (remove the spaces)

//5=SPLIT()converting string to an array and split the string from the operators like+|,
// var a = "1,2|3,4";
// var b = a.split("|");
// var c = a.split(",");
// console.log(b);//[ '1,2', '3,4']taking space from pipe(|)
// console.log(c);//[ '1', '2|3', '4' ]took space from commas(,)consider 2|3 is single string because ther is no seprator like commas
// console.log(a.split(',')[1])//2|3 to know the ith postion of no. in array

// var a = "richa";
// var b = a.split("");
// var c = a.split(" ");
// console.log(b);//['r','i','c','h','a']it works on empty string.let say in RI DOES NOT HAVE ANY SPACE SO SPLIT WILL CONSIDER AS A EMPTY STRING AND SPLIT FROM CHAR TO CHAR
// console.log(c)// [ 'richa' ]it does not found any space from char then it will print the wjole string

