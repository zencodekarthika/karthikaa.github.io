function Car(name) {
    this.name = name;
    this.fuelCapacity = 30;
    this.capacityUnit = 'litres';
    this.direction = null;
    this.currentGearPosition = 0;
    this.kilometersRunned = 0;
    this.mileage = 5;
    this.turnToDirection = function (direction) {
        this.direction = direction;
    }

    this.getDirection = function () {
        console.log(this.name + " direction is " + this.direction);
        return this.direction;
    }

    this.changeGear = function (gear) {
        switch (gear) {
            case 0: {
                break;
            }
            case 1: {
                this.kilometersRunned = this.kilometersRunned + 100;
                break;
            }

            case 2: {
                this.kilometersRunned = this.kilometersRunned + 200;
                break;
            }

            case 3: {
                this.kilometersRunned = this.kilometersRunned + 300;
                break;
            }

            case 4: {
                this.kilometersRunned = this.kilometersRunned + 400;
                break;
            }
        }
        updateFuelCapacity();
    }

    function updateFuelCapacity() {

    }

    this.fillFuel = function (litres) {
        this.fuelCapacity = this.fuelCapacity + litres;
    }

    this.getFuelCapacity = function () {
        console.log(this.name + ' fuel capacity is ' + this.fuelCapacity);
        console.log(this.name + ' total kilometers runned ' + this.kilometersRunned);
    }
    this.remainingfuelcapacity = function () {
        var mileage = 20;
        var res = this.kilometersRunned / mileage;
        var finalresult = this.fuelCapacity - res;
        console.log(this.name + 'remaining fuel' + 'finalresult');
        console.log(finalresult);
    }
}

var myCar1 = new Car('sedan');
var myCar2 = new Car('mini');
console.log("#######sedan current direction ######");
console.log("####Fuel capacity#####");
console.log("#####kilometers running state####");
myCar1.fillFuel(20);
myCar1.changeGear(1);
myCar1.changeGear(2);
myCar1.changeGear(3);
myCar1.turnToDirection('right');
myCar1.getDirection();
myCar1.getFuelCapacity();
myCar1.remainingfuelcapacity();
console.log("*****BYE MY TASK IS COMPLETED*******");
