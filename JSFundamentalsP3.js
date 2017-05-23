class Person {
    constructor(name){
        this.name = name;
        this.distance_travelled = 0;
    }

    say_name() {
        console.log(name);
    }
    say_something(something){
        console.log(`${this.name} says ${something}`);
    }
    walk(){
        console.log(`${this.name} is walking`);
        this.distance_travelled += 3;
    }
    run(){
        console.log(`${this.name} is running`);
        this.distance_travelled += 10;
    }
    crawl(){
        console.log(`${this.name} is crawling`);
        this.distance_travelled += 1;
    }
}

const myPerson = new Person("Zach");

myPerson.walk();

class Ninja {
    constructor(name){
        this.name = name;
        this.cohort = "CodingDojo";
        this.beltLevel = "Yellow-belt";
    }

    levelUp(){
        if (this.beltLevel === "Yellow-belt"){
            this.beltLevel = "Green-belt"
        } else if (this.beltLevel === "Green-belt"){
            this.beltLevel = "Black-belt";
            console.log("Congradulations!!");
        }
    }
}

const myNinja = new Ninja("ZachAttack");
myNinja.levelUp();
myNinja.levelUp();
