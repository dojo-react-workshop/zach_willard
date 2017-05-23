
class Vehicle {

    Constructor (name, wheels, passengers, speed){
        let distance_travelled = 0;
        this.name = name;
        this.numWheels = wheels;
        this.numPassengers = passengers;
        this.speed = speed;
        
        let updateDistanceTravelled = function(){
            distance_travelled += speed;
        };
    };

    makeNoise() {
        console.log("Beep!");
    }
    move() {
        updateDistanceTravelled();
        this.makeNoise();
    }
    checkMiles(){
        console.log(distance_travelled);
    }
}

let bike = new Vehicle("Bike", 2, 1, 2);
bike.makeNoise = function () { console.log("ring ring!")};

let sedan = new Vehicle ("Sedan", 4, 4, 50);
sedan.makeNoise = function () { console.log("Honk Honk!")};

let bus = new Vehicle ("Bus", 8, 0, 30);
bus.addPassengers = function (newPassengers){
    bus.numPassengers += newPassengers;
}

bus.addPassengers(5);
console.log(bus);

bus.move();

sedan.move();

sedan.checkMiles();