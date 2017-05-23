function VehicleConstructor (name, wheels, passengers){
    this.name = name;
    this.numWheels = wheels;
    this.numPassengers = passengers;
    this.makeNoise = function () {
        console.log("Beep!");
    }
}

let bike = new VehicleConstructor("Bike", 2, 1);
bike.makeNoise = function () { console.log("ring ring!")};

let sedan = new VehicleConstructor("Sedan", 4, 4);
sedan.makeNoise = function () { console.log("Honk Honk!")};

let bus = new VehicleConstructor("Bus", 8, 0);
bus.addPassengers = function (newPassengers){
    bus.numPassengers += newPassengers;
}

bus.addPassengers(5);
console.log(bus);