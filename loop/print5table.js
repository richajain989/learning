//PROGRAMME WITH FUNCTION WITH DYNAMIC PARAMETER
function loop(y){
  var x = 0;
  for(i=1; i<=10; i++){
    //var y=13;
    x = y*i;
    console.log(y,"*",i,"=" ,x);
  }
}
loop(5)