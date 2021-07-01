// class Dog{

//     Dog(a, b){
//         this.name = a;
//         this.age = b;
//     }

//     sum(a, b) {
//         var c = a + b;
//         console.log(c);
//     }

//     mul(a, b) {
//         var c = a * b;
//         console.log(c);
//     }

//     name(){
//         return this.name;
//     }
// }

// var d = new Dog("kshitij",32);
// console.log(d.name());

class GuessGame {
    constructor(p1,p2,p3) {
       this.p1 = new Player;
       this.p2 = new Player;
       this.p3 = new Player;
    }
    Start() {
        var guessp1 = 0;
        var guessp2 = 0;
        var guessp3 = 0;

        Boolean (p1isright = false);
        Boolean (p2isright = false);
        Boolean (p2isright = false);
        
        let targetNumber = (Math.random() * 10);
        console.log("m thinking of a number between 0 and 9...”);
        while (targetNumber == ) {
            console.log("Number to guess is “ + targetNumber");
             this.p1.guess();
             this.p2.guess();
             this.p3.guess();
            
             guessp1 = p1.Number;
             console.log("Player one guessed “ + guessp1);
             guessp2 = p2.Number;
             console.log("Player one guessed “ + guessp2);
             guessp3 = p3.Number;
             console.log("Player one guessed “ + guessp3);
        }
             if (guessP1 == targetNumber){
                p1isRight = true;
             }

            if (guessp2 == targetNumber){
                p2isright = true;
            }
            if (guessp3 == targetNumber){
                p3isright = true;
            }
            
            if (p1isRight || p2isRight || p3isRight) {
                console.log("We have a winner!");
                console.log("Player one got it right? “ + p1isRight");
                console.log("Player two got it right? “ + p2isRight");
                console.log("Player three got it right? “ + p3isRight");
                console.log("Game is over.");
            }
            else {
                console.log("Players will have to try again");

            }
    }
    
}
