//Create a function which accepts three arguments
//In case all these passes arguments are 0 then print message "Please provide some valida positive value"
//otherwise just add these numbers and print the value


function sum(a, b, c){
    if(a==0 && b==0 && c==0){
        console.log("enter positive value");
    }
    else{
        var g = a + b + c;
        console.log(g);
    }
}
sum(1,2,3);
sum(0,0,3);
sum(0,0,0);