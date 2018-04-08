var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*function saludar(nombre){
    console.log("hola" + nomrbe);
}*/
function sayHello(name) {
    console.log(name);
}
var varName = {
    name: "Logan"
};
sayHello(varName.name);
//var
var menssage = "hello";
if (true) {
    var menssage = "bye";
}
console.log(menssage);
//adios
//let variable 
var menssageLet = "hello";
if (true) {
    var menssageLet_1 = "bye";
}
console.log(menssageLet);
//hola
//const
var OPTIONS = "all";
if (true) {
    var OPTIONS_1 = "others"; //local en el contexto
}
//tipos variable declaraciones
var text = "Peter";
var number = 123;
var booleano = true;
var today = new Date();
today = new Date('2020-10-21');
var anyValue;
anyValue = text;
anyValue = number;
anyValue = booleano;
anyValue = today;
var heroe = {
    nombre: "",
    edad: 20
};
//string
var passenger1 = "Rick";
var passenger2 = "Morty";
var numberPassengers = 4;
var fullText = "Passenger:,\n     " + passenger1 + ", " + passenger2 + " (" + numberPassengers + ") " + getPalnetName() + " " + (1 + 1);
console.log(fullText);
function getPalnetName() {
    return "earth:";
}
//params
function activate(who, object, when) {
    if (object === void 0) { object = "pistola"; }
    var menssage;
    if (when) {
        menssage = who + " activate it " + object + " - " + when;
    }
    else {
        menssage = who + " activate it " + object;
    }
    return menssage;
}
activate("Rick");
activate("Rick", "nave");
activate("Rick", "nave", "later");
//funciones de flecha
var myFunction = function (a) {
    return a;
};
var myFunction1 = function (a) { return a; };
var myFunction2 = function (a) { return a; };
console.log(myFunction("a"));
console.log(myFunction2("a"));
console.log(myFunction2("a"));
var myFunction3 = function (a, b) {
    return a + b;
};
var myFunction4 = function (a, b) { return a + b; };
var myFunction5 = function (name) {
    name = name.toUpperCase();
    return name;
};
var myFunction6 = function (name) {
    name = name.toUpperCase();
    return name;
};
var nameExample = "Peter";
var Rick = {
    nameExample: "Rick",
    talk: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nameExample + " aggg"); //Peter  
        }, 1500);
    },
    talkRow: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nameExample + " aggg"); //Rick because row function
        }, 1500);
    },
    burp: function () {
        console.log(this.nameExample + " oorhrsfd"); //Peter
    }
};
//arrays
var pax = {
    namePax: "Rick",
    key: "whisky",
    power: "invent"
};
//let namePax = pax.namePax;
//let keyPax = pax.key;
//let powerPax = pax.power;
//desstructuracion let { namePax:string, key, power } = pax; es una lias
var namePax = pax.namePax, key = pax.key, power = pax.power; //la asignacion va por nombre
var animals = ["cat", "dog", "donkey"];
var cat = animals[0], dog = animals[1], donkey = animals[2]; //la asinacion es secuencial
console.log(cat, dog, donkey);
//promesas
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promersa terminada");
        //termina bien
        resolve();
        //termina mal
        //reject();
    }, 1500);
});
console.log("step 1");
prom1.the(function () {
    console.log("OK");
}, function () {
    console.error("KO");
});
console.log("step 2");
function sendMision(pax) {
    console.log("Send mission " + pax.name);
}
function sendHouse(pax) {
    console.log("Send house " + pax.name);
}
var person1 = {
    name: "Rick",
    compain: "Morty"
};
sendMision(person1);
sendHouse(person1);
//class
var Character = /** @class */ (function () {
    function Character(name, compain) {
        this.name = "Rick";
        this.age = 0;
        this.canTravel = false;
        this.name = name;
        this.compain = compain;
        console.log("construstor person");
    }
    return Character;
}());
var rick = new Character("Rick", "Morty");
console.log(rick);
//decorators
function consola(constructor) {
    console.log(constructor);
}
var Morty = /** @class */ (function () {
    function Morty(nombre) {
        this.nombre = nombre;
    }
    Morty = __decorate([
        consola
    ], Morty);
    return Morty;
}());
