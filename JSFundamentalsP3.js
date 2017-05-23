function personConstructor(name){
    this.name = name;
    this.distance_travelled = 0;
    this.say_name = function(){
        console.log(name);
    };
    this.say_something = function(something){
        console.log(`${this.name} says ${something}`);
    };
    this.walk = function(){
        console.log(`${this.name} is walking`);
        this.distance_travelled += 3;
    };
    this.run = function(){
        console.log(`${this.name} is running`);
        this.distance_travelled += 10;
    };
    this.crawl = function(){
        console.log(`${this.name} is crawling`);
        this.distance_travelled += 1;
    }
}

const myPerson = new personConstructor("Zach");

myPerson.walk();

function ninjaConstructor(name){
    this.name = name;
    this.cohort = "CodingDojo";
    this.beltLevel = "Yellow-belt";
    this.levelUp = function() {
        if (this.beltLevel === "Yellow-belt"){
            this.beltLevel = "Green-belt"
        } else if (this.beltLevel === "Green-belt"){
            this.beltLevel = "Black-belt";
            console.log("Congradulations!!");
        }
    }
}

const myNinja = new ninjaConstructor("ZachAttack");
myNinja.levelUp();
myNinja.levelUp();

// const person = {
//     name: "Zach",
//     distance_travelled:0,
//     say_name: function(){
//         console.log(name);
//     },
//     say_something: function(something){
//         console.log(`${this.name} says ${something}`);
//     },
//     walk: function(){
//         console.log(`${this.name} is walking`);
//         this.distance_travelled += 3;
//     },
//     run: function(){
//         console.log(`${this.name} is running`);
//         this.distance_travelled += 10;
//     },
//     crawl: function(){
//         console.log(`${this.name} is crawling`);
//         this.distance_travelled += 1;
//     }
// };