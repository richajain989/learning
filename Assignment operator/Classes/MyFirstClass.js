class Dog{

    Dog(a, b){
        this.name = a;
        this.age = b;
    }

    sum(a, b) {
        var c = a + b;
        console.log(c);
    }

    mul(a, b) {
        var c = a * b;
        console.log(c);
    }

    name(){
        return this.name;
    }
}

var d = new Dog("kshitij",32);
console.log(d.name());