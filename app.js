//Part One

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `My vehicle is a ${this.year} ${this.make} ${this.model}`;
    }
}

let myVehicle = new Vehicle("Honda", "Civic", 2011);

//Part Two

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Ford", "Escape", 2001);

//Part Three

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

let myMotorcycle = new Motorcycle("Vespa", "PX150", 2017);

//Part Four

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we’re full.";
        } else {
            this.vehicles.push(newVehicle);
            return "vehicle added!"
        }
    }
}

let garage = new Garage(2)