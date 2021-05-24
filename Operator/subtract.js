//subtraction without function
// var a = 10;
// var b = 20;
// var c = a-b;
// console.log(c);


// function sub(){
// var a=20;
// var b=40;
// var c=a-b;
// console.log(c);
// }
// sub()

//function in dynamic way
// function sub(a,b){
//     c=a-b
//     console.log(c)
// }
// sub(5,6)


//subtrcation with function
//Create a function which accepts three arguments
//In case all these passes arguments are 0 then print message "Please provide some valida positive value"
//otherwise just add these numbers and print the value

function sub(a,b,c){
    if(a==0 && b==0 && c==0){
    console.log("please provide some positive value");
}
    else{
        var d=a-b-c;
        console.log(d);
    }
}
sub(6,4,2)