// var name = "vatican" ; 
// if (name != "vatican") {
//     console.log("its right");
// }
// else  {
//     console.log("wrong");
// }

// var x = "Vatican";
// var correctAnswer = "Vatican"; 
//  if (x !== correctAnswer) {
//      console.log("Correct!");
//     }
// else {
//     score--;
//     userIQ = "problematic"; 
//     console.log("Incorrect");
//     }
//         PAGE NO 43

// var x = "rome" ;
// correctAns = "vatican";
// if (x == "vatican") {
//     console.log("you are right");
// }
// else if (x != "rome") {
//     console.log("almoast right");
// }
// else{
//     console.log("wrong");
// }


// var weight = 390;
// var time = 7;
// var age = 34;
// if (weight > 300 || time < 5 && age > 50) {
//       console.log("Come to our tryout!"); 
//     }
// else {
//  console.log("Come to our cookout!"); 
// }


// var num = [1, 2, 3];
// console.log(num[2]);
// num[3] = 4;
// num[4] = 5;
// console.log(num[4]);
// console.log(num);
// num[4] = 56;
// console.log(num[4]);
// num.pop();
// console.log(num);
// num.shift();
// console.log(num);
// num.push("hi");
// console.log(num);
// num.unshift(90);
// console.log(num);
// num.splice(4, 5, 89 , "phulakin" );
// console.log(num);


//var name = [1, 2, 3, 4, 5,];
//name.splice(1, 2);//removing elements position wise
// name.splice(1, "hi", "hello");
// console.log(name);

// var kashvi =["pyari", "badmash", 3, 29, 67, 89];
// var phullu = kashvi.slice(1, 5);
// console.log(phullu);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 0, "fish", "monkey");
// console.log(pets);

// var num = [1, 2, 3, 4, 5];
// num.splice(3, 2, "hi");
// console.log(num);

// var num = [1, 2, 3, 4, 5];
// var name = num.slice(0, 3);
// console.log(name);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var result = pets.slice(2);
// console.log(result);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(0, 2);
// console.log(pets);

// var fruits = ["Apple", "Banana", "Orange"];
//  for(var i=0; i<=2; i++){
//       console.log(fruits[i])
//  }

// var num = [1, 2]; 
// for (var i = 0; i < 2; i++) {
//    if(num[i] === num[i]){
//      console.log(num[i]);
//   }
//}


// var text = "";
// for (var i = 0; i < 5; i++) {
//   if (i == 2){
//   break;
//   }
//    text += " this is " + i;
// }
// console.log(text);
                            
// var animals = ["goat", "cat", "crow"];
// var products = ["milk", "cheese", "burger"];
// var k = 0;
// for (var i = 0; i < animals.length; i++) {
//   var foodItems = [];
//     for (var j = 0; j < products.length; j++) {
//       foodItems[k] = animals[i] + products[j];
//       k++;
     
//     }
//     console.log(foodItems);
//   } 


// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var result = pets.slice(3, 4);
// console.log(result);

// var name = "Richa";
// var first = name.slice(0, 1);
// var second = name.slice(1);
// first = first.toUpperCase();
// second = second.toUpperCase();
// var sum = first + second;
// console.log(sum);

// var str = ["hi", "how "] ;
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 2) === " ") { 
//   console.log("No double spaces!");
//   break;
//   }
// }

// var month = "November";
// length = month.length;
// if (length > 5 ) {
//   cutPart = month.slice(0, 5);
//     console.log(cutPart);
// }

// var a = 3;
// var b = 4;
// var c = a; // c=3
// a = b;
// b = c;
// console.log(a);
// console.log(b);


//rotate the variables  b=a, c=b, a=c (123)
// var a = 1;
// var b = 2;
// var c = 3;
// var d = c;
// var e = b;
// b = a; //1
// c = e; //2
// a = d; //3
// console.log(b, c, a);

//rotate the variable b=a, c= b, d=c, e=d, a=e(1,2,3,4,5)
// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var e = 5;

// var l = b; //l=2
// b=a;  //b=1
// var k = c; //k = 3
// c = l; // c = 2
// l = d;  // l = 4
// d = k; // d = 3
// k = l; //k=4
// l = e; // 5
// e = k; // e = 4
// a = l;

// console.log("a = "+ a);
// console.log("b = "+ b);
// console.log("c = "+ c);
// console.log("d = "+ d); 
// console.log("e = "+ e);

//rotation b=a, c= b, d=c, e=d, a=e(1,2,3,4,5)
// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var e = 5;
// var f = b; //f=2
// var g = c; //g=3
// b = a;// b=1
// c = f;//c=2
// d = g;//d=3
// f = d;   // 


//Replce string
// function warfunction(){
// var text = "hello World War II hi";
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {

//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
//     //return text;
// }
// console.log(text);
// }
// warfunction();

// var text = "Note that World War II is good and World war II is amazing";
// var firstIndex = text.indexOf("World War II");
// console.log(firstIndex);
// if (firstIndex != -1) {
//  text = text.slice(0, firstIndex) + "the Second World War" + text.slice(22, firstIndex) + "the second world war"  +text.slice(firstIndex + 12); 
// }
// console.log(text)

// var text = "World War II is same to World War II and World War II";
// text = text.replace("World War II", "the Second World War");
// console.log(text);
//console.log(newtext);

// var text = "World War II is same to World War II and World War II";
// newtext = text.replace(/World War II/g, "the Second World War");
// console.log(text);
// console.log(newtext);

// var num = 0.9999999999999999;
// var betternum = Math.random(num * 50) +1;
// console.log(betternum);

// var num1 = Math.random();
// var num2 = (num1 * 6) ;
// var num3 = Math.floor(num2);
// console.log(num3);



// var profit = "200" - "150";
// console.log(profit);//50

// var profit = "200" + "150";
// console.log(parseInt(profit));//200150


// var myFractional = "1" ;
// console.log(parseInt(myFractional) + 56); //57

// var currentAge = "50"; 
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge); //51

// var x = "2";
// var tot = parseInt(x) + parseInt(x);
// console.log(tot);//4

// var num1 = "1";
// var num2 = "2";
// var sum = Number(num1) + Number(num2);
// console.log(sum);//3

// var num = 100;
// console.log(num.toString() + num.toString());

//  var price = 950;
//  var taxRate = 6.03;
//  var total = price + (price * taxRate);
// var result = total.toFixed(2);
// console.log(result);//6678.50(this funtion can controll to the decimals to 2 digit)


// var currencyTotal = "$" + result;
// console.log(currencyTotal);

// var num = 1289.125;
//  var str = num.toString();
//  if (str.charAt(str.length - 1) === "5") { 
//       str = str.slice(0, str.length - 1) + "6"; 
//     }
//  num = Number(str);
//  prettyNum = num.toFixed(2);
//  console.log(prettyNum);

// var num = 20.76798;
// console.log(num.toFixed());



// var theDay = [0, 1, 2, 3, 4 ,5, 6];
// var aa = new Date();
// var bb = aa.getDay();
// var result = theDay[bb];
// console.log(result);//5

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
// var d = new Date(); 
// var dayName = days[d.getDay()];
// console.log(dayName);//friday

// var d = new Date(); 
// var dayOfMonth = d.getDate();
// var month = d.getMonth();
// console.log(dayOfMonth);
// var millsSince = d.getTime();
// console.log(month);
// console.log(millsSince);

// var a = 9;
// var a = new DocumentFragment();
// var z = new console();
//var a = new Date();
//var k = "kshitij";
//console.log(a);
// var b = a.getHours();
// var c = a.getMinutes();
// console.log("time is ", b ,c + " minutes ") ;


//var d = new Date();
//var currentMonth = d.getMonth();
//var dayOfMonth = d.getDate();
//console.log(currentMonth);
//var second = d.getSeconds();
//console.log(dayOfMonth);
//console.log(second);
//var time = d.getTime();
//console.log(time);
//var secsSince = d.getTime() / 1000;
//console.log(secsSince);

// var d = new Date();
// var h = d.getHours();
// if (d.getMinutes() == 0 && d.getSeconds() == 0) {
//     console.log(h);
// }

// var year = ["Jan", "Feb", "Mar", "Apr","May",
//     "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// var d = new Date();
// var m = d.getMonth();
// console.log(year[m]);

// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);
// console.log(dDiff);//5127

// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime(); 
// var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// console.log(daysTillDoom);//5127

// var d = new Date("Jun 15, 2021");
// console.log(d.getHours() + " " + d.getMinutes() + " " + d.getSeconds());

// var ticks = new Date().getTime();
// console.log(Math.floor(ticks / (1000 * 60 * 60 * 24)));

// var d = new Date();
// d.setFullYear(2001);
// console.log(d);

// var d = new Date();
// d.setHours(13);
// console.log(d);

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// console.log("time: " + theHr + ":" + theMin);



// function calcTot(merchTot) {
//     var orderTot;
//      if (merchTot >= 100) { 
//          orderTot = merchTot;
//     }
//      else if (merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     }
//      else{
//         orderTot = merchTot + 5 + (.03 * (merchTot - 50)); 
//      }
//      return orderTot;
// } 
//var totalToCharge = 
//calcTot(79.99);
//console.log(calcTot(79.99));

// var dayofweek = "sat";
// switch(dayofweek) {
//     case "sat" :
//         console.log("its a saturday");
//         break;
//     case "sun" :
//         console.log("its a sunday");
//         break;
//     case "mon" :
//         console.log("its a monday");
//         break;
//     default :
//         console.log("Great days");
// }

// var dow = "fri";
// if (dow == "sat") {
//     console.log("this is saturday");
// }
// else if (dow == "mon") {
//     console.log("this is monday");
// }
// else {
//     console.log("Great days");
// }


//without break statement=]
// var dayofweek = "sat";
//  switch(dayofweek) {
//      case "sat" :
//          console.log("its a saturday");
        
//      case "sun" :
//          console.log("its a sunday");
        
//     case "mon" :
//         console.log("its a monday");
        
//     default :
//         console.log("Great days");
// }

// var group = "duo";
// switch(group) {
// case "solo" :
//   console.log("performers = 1");
// case "duo" :
//    console.log("performers = 2");
// case "trio" :
//     console.log("performers = 3");
// }


// var now = new Date();
// var today = now.getDay();
// var message;
// switch(today){
// case "Sunday" || "Saturday" :
//   console.log("Weekend");
//   break;
// default :
//   console.log("Weekday");
// }


// var animals=["horse", "ox", "cow", "pig", "duck"];
// var i = 0;
// while (i < animals.length) {
//   if (animals[i] === "pig"){
//     console.log("Found it!");
//     //break;
//   }
//   i++;
// }

// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 1);

// var j = 0;
// while (j <= 1); {
//   console.log(j);
//   j++;
// }

//for(var k=0; k > 4; k++);
//console.log(k);

// var animals=["horse", "ox", "cow", "pig", "duck"];
// var j = 0;
// do {
//   if(animals[j] === "pig");
//   console.log("Found it!");
//   break;
//   j++;
// }
// while(j < animals.length){
// }

function star(){
    for(var i = 1; i <=5; i++){
        for(var j=1;j<=5; j++){
           process.stdout.write(" *");     //* * 
        }
        process.stdout.write("\n");
    }
}
star();
