/*function saludar(nombre){
    console.log("hola" + nomrbe);
}*/
function sayHello(name) {
    console.log(name);
}
var varName = {
    name: "Logan",
};
sayHello(varName.name);

//var
var menssage = "hello";
if(true){
    var menssage = "bye";
}
console.log(menssage);
//adios

//let variable 
let menssageLet = "hello";
if(true){
    let menssageLet = "bye";
}
console.log(menssageLet);
//hola

//const
const OPTIONS = "all";
if(true){
    const OPTIONS = "others";//local en el contexto
}

//tipos variable declaraciones
let text:string = "Peter";
let number:number = 123;
let booleano:boolean = true;
let today:Date = new Date();
today = new Date('2020-10-21');
let anyValue:any;
anyValue=text;
anyValue=number;
anyValue=booleano;
anyValue=today;

let heroe ={
    nombre:"",
    edad:20
};

//string
let passenger1:string ="Rick";
let passenger2:string ="Morty";
let numberPassengers:number = 4;

let fullText =`Passenger:,
     ${passenger1}, ${passenger2} (${numberPassengers}) ${getPalnetName()} ${1 + 1}`;
console.log(fullText);

function getPalnetName(){
    return "earth:";
}
//params
function activate(who:string, 
    object:string="pistola",
    when?:string){
    let menssage:string;

    if(when){
        menssage = `${who} activate it ${object} - ${when}`;    
    }else{
        menssage = `${who} activate it ${object}`;
    }
    

    return menssage;
}

activate("Rick")
activate("Rick", "nave")
activate("Rick", "nave", "later")


//funciones de flecha

let myFunction = function(a){
    return a;
}

let myFunction1 = (a) => a;
let myFunction2 = a => a;
console.log(myFunction("a"));
console.log(myFunction2("a"));
console.log(myFunction2("a"));

let myFunction3 = function(a:number, b:number){
    return a + b;
}

let myFunction4 = (a:number, b:number) => a + b;

let myFunction5= function(name:string){
    name = name.toUpperCase();
    return name;
};

let myFunction6 = (name:string) => { 
    name = name.toUpperCase();
    return name;
};

let nameExample = "Peter";

let Rick ={
    nameExample: "Rick",
    talk(){
        setTimeout(() => {
            console.log(this.nameExample + " aggg")  //Peter  
        }, 1500);
    },
    talkRow(){
        setTimeout(() => {
            console.log(this.nameExample + " aggg")    //Rick because row function
        }, 1500);
    },
    burp: function(){
        console.log(this.nameExample + " oorhrsfd")//Peter
    }
};

//arrays

let pax = {
    namePax: "Rick",
    key:"whisky",
    power:"invent"
}

//let namePax = pax.namePax;
//let keyPax = pax.key;
//let powerPax = pax.power;
//desstructuracion let { namePax:string, key, power } = pax; es una lias
let { namePax, key, power } = pax; //la asignacion va por nombre


let animals: string[] = ["cat","dog","donkey"];
let [cat,dog,donkey] = animals; //la asinacion es secuencial
console.log(cat,dog,donkey)

//promesas

let prom1 = new Promise(function (resolve, reject){ 
    setTimeout(()=>{
        console.log("Promersa terminada");
        //termina bien
        resolve();

        //termina mal
        //reject();
    },1500)
})



console.log("step 1");
prom1.the(function(){
    console.log("OK");
},
function(){
    console.error("KO");
})
console.log("step 2");


//interfaces
interface Person{
    name:string,
    compain: string
}

function sendMision(pax:Person){
    console.log("Send mission " + pax.name);

}

function sendHouse(pax:Person){
    console.log("Send house " + pax.name);
}

let person1:Person = {
    name: "Rick",
    compain: "Morty"
}

sendMision(person1);
sendHouse(person1);

//class

class Character{
    name: string = "Rick";
    compain: string;
    age:number = 0;
    canTravel: boolean = false;

    constructor(name:string, compain:string){
        this.name = name;
        this.compain = compain;
        console.log("construstor person");
    }
}

let rick: Character = new Character("Rick","Morty");

console.log(rick);

//decorators
function consola(constructor:Function){
    console.log(constructor);
}

@consola
class Morty{
    constructor(public nombre:string){

    }
}