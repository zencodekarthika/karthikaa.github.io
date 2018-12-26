var car = [{
    type: "suv",
    modelno: "8",
    color: "white",
    brand: "honda",
    fueltype: "disel",
    yearofmanufacture: "2018",
    enginepower: "200",
    geartype: "auto",
    dateoflaunch: "10/25/2016",
    mileage: "20",
    KMrunned: "100",
    carsold: "4",
    rearcamera: "true",
    fuelcapacity: "30",
    direction: "turnleft",
    direction: "turnright",
    gear: "N",


}, {
    type: "mini",
    modelno: "8",
    color: "red",
    brand: "audi",
    fueltype: "disel",
    yearofmanufacture: "2009",
    enginepower: "400",
    geartype: "manual",
    dateoflaunch: "12/27/2018",
    mileage: "30",
    KMrunned: "200",
    carsold: "5",
    rearcamera: "true",
    fuelcapacity: "20",
    direction: "turnleft",
    direction: "turnright",
    gear: "2",


},
];
var addnewobject = {
    type: "sedan",
    modelno: "6",
    color: "blue",
    brand: "Dizer",
    fueltype: "disel",
    yearofmanufacture: "2016",
    enginepower: "300",
    geartype: "auto",
    dateoflaunch: "08/21/2016",
    mileage: "20",
    KMrunned: "300",
    carsold: "2",
    rearcamera: "true",
    fuelcapacity: "40",
    direction: "turnleft",
    direction: "turnright",
    gear: "R",
};
console.log("########addnewproperty########");
newobject();
function newobject() {

    car.push(addnewobject);
    for (var i = 0; i < car.length; i++) {
        console.log((i + 1) + ": " + car[i].type + " ," + car[i].modelno + " ," + car[i].color + " ," + car[i].brand + " ," + car[i].fueltype + " , " + car[i].yearofmanufacture + " ," + car[i].enginepower + " ," + car[i].geartype + " ," + car[i].dateoflaunch + " ," + car[i].mileage + " ," + car[i].KMrunned + " ," + car[i].carsold + " , " + " ," + car[i].fuelcapacity);
    }
    console.log(car);
}
console.log("########## rearcamera updation#######");
Update();
function Update() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].rearcamera == "true") {
            car[i].rearcamera = "false";
        }
        console.log((i + 1) + " : " + car[i].type + " :" + car[i].rearcamera);
    }
}
console.log("#########turnleft direction#######");
turnleft();
function turnleft() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].direction == "turnleft") {
            car[i].direction = "turnright";
        }
        console.log((i + 1) + " : " + car[i].type + " :" + car[i].direction);
    }
}
console.log("#######turnright direction######");
turnright();
function turnright() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].direction == "turnright") {
            car[i].direction = "turnleft";
        }
        console.log((i + 1) + " : " + car[i].type + " :" + car[i].direction);
    }
}
console.log("#######change gear#######");
geartype();
function geartype() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].gear == "N") {
            car[i].gear = "0";
        }
        else if (car[i].gear == "1") {
            car[i].gear = "2";
        }
        else if (car[i].gear == "R") {
            car[i].gear = "N";
        }
        console.log((i + 1) + " : " + car[i].type + " : " + car[i].gear);
    }
}
console.log("########print the carname before 2010######");
yearfilter();
function yearfilter() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].yearofmanufacture < 2010) {
            console.log(car[i].type + " " + car[i].modelno + " " + car[i].yearofmanufacture);
        }
    }
}
console.log("########car count##########");
countcar();
function countcar() {
    var count = 0;
    car.forEach(function (c) {
        if (c.type == "sedan") {
            count++;
        }
    });
    console.log("type:sedan" + " " + count);
}
console.log("###########gear count########");
countgear();
function countgear() {
    var count = 0;
    car.forEach(function (e) {
        if (e.geartype == "auto") {
            count++;
        }
    });
    console.log("gearType:auto" + " " + count);
}
console.log("########brandsorting######");
brandsorting();
function brandsorting() {
    for (var i = 0; i < car.length; i++) {
        car.sort(function (a, b) {
            if (a.type < b.type) { return -1; }
            if (a.type > b.type) { return 1; }
            return 0;
        })
        console.log(car[i].type + " :" + car[i].brand + " :" + car[i].yearofmanufacture);
    }
}
console.log("###### concat arrays######");
concatarrays();
function concatarrays() {
    var concat = car.concat(addnewobject);
    console.log(concat);
}
console.log("######remove minicar######");
removeminilist();
function removeminilist() {
    for (var i = 0; i < car.length; i++) {
        if (car[i].type == "mini") {
            delete car[i].type;
            console.log("deleted list ");
        }
    }
}
console.log("########launchdate no of cars  #######")
launchdate();
function launchdate() {
    var count = 1;
    for (var i = 0; i < car.length; i++) {
        if ((car[i].dateoflaunch >= "10/25/2016") && (car[i].dateoflaunch < "10/27/2018")) {
            c = count++;
            console.log(car[i].type + " :" + c);
        }
    }
}
console.log("######object to class#####");
classobject();
function classobject(type, modelno, brand) {
    this.type = type;
    this.modelno = modelno;
    this.brand = brand;
    for (var i = 0; i < car.length; i++) {
        console.log((i + 1) + ": " + car[i].type + " ," + car[i].modelno + " ," + car[i].color + " ," + car[i].brand + " ," + car[i].fueltype + " , " + car[i].yearofmanufacture + " ," + car[i].enginepower + " ," + car[i].geartype + " ," + car[i].dateoflaunch + " ," + car[i].mileage + " ," + car[i].KMrunned + " ," + car[i].carsold + " , " + " ," + car[i].fuelcapacity);
    }
    car.sort();
}

