// write a program of divide in which a is the divident and b is the divisor, 
// and put a condition where b should be greater than 0. and if b =0 then 
// print "enter the value greater than 0"*/

function divd(a,b){
    if(b==0){
        console.log("enter thevalue greater then 0");
    }
    else{
        let c =a/b;
        console.log(c)
    }
    
}

divd(12,2)//6
divd(12,0)//err
divd(13,1)//13
divd(5,2)//2.5
divd(7,0)//err