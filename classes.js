// class Car {

//     constructor(a, y, c) {
//       this.name = a;
//       this.year = y;
//       this.color= c;
//     }

//     hello(){
//         return "hi " + this.name;
//     }
//   }

// let aa = new Car("Audi", 2019, "Black");
// let bb = new Car("scroos",2020,"grey");
// console.log(aa.name);//Audi
// console.log(bb.color);//grey
// console.log(bb.hello());//hi scross
// console.log(bb);//Car { name: 'scroos', year: 2020, color: 'grey' }


//creatw a simple Object
// let aa1 = {name:"richa",age:32};
// var a = "kshitij";
// var b = "richa";
// let aa2 = [aa,{name:"kshitj",age:32}];

// aa = {name:"Audi",age:32};
// console.log(aa.name);

//console.log(aa.name);

class body{

  constructor(a,b,c){
    this.eyes = a;
    this.hairs = b;
    this.fingers = c;
  }
    ab(){
      return "beautiful" + this.eyes;
  }
}
  let richa = new body(2,"black",10);
  //console.log(richa.fingers);//10
  console.log(richa.ab());//beautiful2