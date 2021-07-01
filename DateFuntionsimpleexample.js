
//UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
/*JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.*/

//TO KNOW CUURENT DATE, TIME, YEAR,DAY ND ALL 

// var i = new Date(2021);
// console.log(i);//Sat May 29 2021 23:42:54 GMT+0530 (India Standard Time)(cuuernt date n tym n all))

// var j =  Date(2020);
// console.log(j);//Sat May 29 2021 23:42:54 GMT+0530 (India Standard Time)(cuuernt date n tym n all)

// var k = new Date();
// console.log(k);//2021-05-29T18:16:51.537Z(current date n tym in diffrent way)

    //NOTE = Separate date and time with a capital T.
    //Indicate UTC time with a capital Z.

// var l = new Date(2021,4,22);
// console.log(l);//2021-05-21T18:30:00.000Z

//PREVIOUS CENTURY

// var m = new Date(99,11,20);
// console.log(m); //1999-12-19T18:30:00.000Z

// var d = new Date(9, 11, 24);
// console.log(d); //1909-12-23T18:30:00.000Z

//DATE STRING
// var d = new Date("October 13, 2014 11:13:00");
// console.log(d); //2014-10-13T05:43:00.000Z

// var d = new Date(0);
// console.log(d); //1970-01-01T00:00:00.000Z(0 denots = time was starts from 1 jan 1970)

//01 January 1970 PLUS100 000 000 000 milliseconds is approximately 03 March 1973:
// var d = new Date(10000000000);
// console.log(d); //1970-04-26T17:46:40.000Z

//January 01 1970 MINUS 100 000 000 000 milliseconds is approximately October 31 1966:
// var d = new Date(-100000000000);
// console.log(d); //1966-10-31T14:13:20.000Z

//One day (24 hours) is 86 400 000 milliseconds.(reprsenting the 2nd day of 1 jan 1970):
// var d = new Date(86400000);
// console.log(d); //1970-01-02T00:00:00.000Z

//tostring
// let d = new Date();
// console.log(d.toString()); //Sun May 30 2021 00:33:53 GMT+0530 (India Standard Time)

// let d = new Date();
// console.log(d);//2021-05-29T19:05:06.813Z (WITHOUT tostring())

/*The toUTCString() method converts a Date object to a string, according to universal time.
The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
 UTC time is the same as GMT time.*/

//  let a = new Date();
//  console.log(a.toUTCString());//Sat, 29 May 2021 19:11:42 GMT


//toDateString()(more readable format)
// var b = new Date();
// console.log(b.toDateString());//Sun May 30 2021

//toISOString()(ISO FORMAT)
// var b = new Date();
// console.log(b.toISOString());//2021-05-29T19:22:10.461Z

// var d = new Date("2021-05-30");
// console.log(d);//2021-05-30T00:00:00.000Z

// var d = new Date("2021-05");
// console.log(d);//2021-05-01T00:00:00.000Z

// var d = new Date("2021");
// console.log(d);//2021-01-01T00:00:00.000Z

/*ISO Dates (Date-Time)
ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):*/
// var iso = new Date("2021-05-30T24:00:00Z");
// console.log(iso);//021-05-31T00:00:00.000Z(date will change bcz time mentioned 24hours)

            //If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
            // var z = new Date("2021-05-30T11:07:00-01:00");
            //     console.log(z);//2021-05-30T12:07:00.000Z(NOT REMOVING UTC)

//JavaScript Short Dates."MM/DD/YYYY"
// var short = new Date("05/30/2021");
// console.log(short);//2021-05-29T18:30:00.000Z

                        //JavaScript Long Dates."MMM/DD/YYYY"
                        // var long = new Date("may 29 2021");
                        //     console.log(long);//2021-05-28T18:30:00.000Z(WHY IT IS GOING ONE DAY BACK)

//Date.parse() method to convert it to milliseconds
//Date.parse() returns the number of milliseconds between the date and January 1, 1970:
// let parse = Date.parse("2021-05-30");
// console.log(parse);//1622332800000

//You can then use the number of milliseconds to convert it to a date object
// var obj = Date.parse("2021-05-30");
// var nobj = new Date(obj);
// console.log(nobj);//2021-05-30T00:00:00.000Z

//The getTime() Method(The internal clock in JavaScript counts from midnight January 1, 1970.
//the getTime() function returns the number of milliseconds since then)
// let gt = new Date();
// console.log(gt.getTime());//1622398273007

// let yr = new Date();
// console.log(yr.getFullYear());//2021

// let mnt = new Date();
// console.log(mnt.getMonth());//4 (bcz months count by 0-11)

// let yrr = new Date();
// let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// console.log(month[yrr.getMonth()]);//May(show current month from array)

// let hrs = new Date();
// console.log(hrs.getHours());//23(means 24 hours in full day/night nd js takes 0 to 23)

// let scnd = new Date();
// console.log(scnd.getSeconds());//3(how many seconds are remaining to complete 60 seconds)

// let dy =new Date();
// console.log(dy.getDay());//0 (sunday starts from 0)

// let day =new Date();
// day2 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(day2[day.getDay()]);//monday

//JavaScript Set Date Methods

// var d = new Date();
// d.setFullYear(2020);
// console.log(d);//2020-05-30T18:42:22.472Z

// var c = new Date();
// c.setHours(22);
// console.log(c);//2021-05-31T16:42:22.472Z

//Compare Dates => compares today's date with January 14, 2100:
let today,someday;
today = new Date();
someday = new Date();
someday.setFullYear("january-14-2100");
if(someday>today){
    console.log("Today is before January 14, 2100.");
}
    else {
        console.log("Today is after January 14, 2100.");
    }
//Today is after January 14, 2100.






