const Car = function() {
    console.log(this)
    this.name = name
}
const maluch = new Car('maluch')
const polonez = new Car('polonez')
//1. nowy pusty obiekt
//2. nastepuje wizanie this z utworzonym obiektem
//3. powstaje wlasciwosc _proto_
//4. Wywołanie funkcji  i przypisanie do zmiennej

maluch.name = 'zabytek';

///////////

const Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function(name) {
    //     this.children.push(name)
    // }
}
Person.prototype.addChildren = function(name) {
    this.children.push(name);
}
Person.prototype.gender = 'female'
const arek = new Person('arek', 20)
const monika = new Person('monika', 30)

monika.addChildren('basia')

///////////
function Player() {}
class User {}
Player.prototype.age = 25;
const janek = new Player();
const marta = new User();
janek.constructor
marta.constructor

const darek = new janek.constructor()
/////

function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    this.changeCitizenship = function(citizenship) {
        this.citizenship = citizenship;
        console.log(`Zmiana za pomoca metod w instancji na obywatelstwo ${this.citizenship}`)
    }
}

const zenek = new Citizen("Polska", "polskie")
//////
const arr = [5,6,7,8];
Array.prototype.delete = function(index) {
    return this.splice(index, 1)
}

arr.__proto__ // protyp konstruktora
arr.__proto__.__proto__ // prototyp object
arr.__proto__.__proto__.__proto__ // null


//tworzenie klasy
class Family {
    constructor(name) {
        this.name = name;
        this.addMember = function() {
            console.log("wywolane z instancji")
        }
    }
    addMember() {
        console.log("wywołane z prototypu")
    }
}
const nowakowie = new Family('nowakowie')
nowakowie.addMember()
// const Family2 = function(name) {
//     this.name = name
// }
// const kowalscy = new Family2('kowalscy');
// Family2.prototype.addMember = function() {}

// wyrazenie klasy

const Family2 = function() {}
    function Family3() {
    }

    class Family4 {

    }
    const Family5 = class{}
    class Family6 {
        constructor(members, ...names) {
            this.members = members;
            this.names = names;
        }
        addMember(newMember) {
            this.names.push(newMember)
            this.members++
            console.log(`Nowy członek rodziny: ${newMember}. Rodzina liczy teraz ${this.members} osób`);
        }
        static makeFamily(...members) {
            return members;
        }
    }
    const kowalscy = new Family6(3, 'Jan', 'Ewa', 'Adam')

    kowalscy.addMember('Jaś')

    const kwiatkowscy = new Family6(1, "Piotr")

    // class Animal{}
    // function Animal2(){}

    // const dog = Animal2()

    class Animal {
        constructor(age, name) {
            this.age = age;
            this.name = name
        }
        breathe() {
            console.log('Zwierze oddycha')
        }
    }
    const zwierze = new Animal(2, 'Artek')

    class Mammal extends Animal {
        constructor(age, hairs, name) {
            super(age, name);
            this.hairs = hairs;
            // wywolujemy konstrukor klasy nadrzednej
        }
        drinkMilk() {
            console.log('Ssaki pija mleko')
        }
    }

    const ssak = new Mammal(3, 'blond', 'Maks');
    ssak.breathe()
    ssak.drinkMilk()
    // zwierze.__proto__ == Animal.prototype // true

    class Human extends Mammal {
        constructor(age,name,hairs, language) {
            super(age, name, hairs)
            this.language = language;
        }
        speak() {
            console.log('Czlowiek mowi')
        }
    }
    const czlowiek = new Human(34, 'Roman', "ciemne", "polski");

/////// THIS
this //obiekt globalny

const fn = function() {
    // this.a = 5;
    console.log(this.name)
}
const obj = {
    name: "Adam",
    showName: fn
}
const fun = fn
// fn()
obj.showName()

const outside = obj.showName;
outside()

document.addEventListener('click', function() {
    console.log(this);
    const inside = function() {
        'use strict'
        console.log(this)
    }
    inside()
})

//////
// const thisExample = function() {
//     console.log(this.example, this)
//     const inside = function() {
//         console.log(this.example, this)
//     }
//     inside()
// }

// thisExample()

const user = {
    age: 45,
    showName() {
        console.log(this.age)
    },
    showName2: function() {
        console.log(this.age);
    }
}
user.showName2()

const stefan = {
    age: 20,
    showName: user.showName
}
stefan.showName()

////// Problem utraty wiazania
const szarik = {
    children: ['fafik', 'żaba'],
    showChildren: function() {
        this.children.forEach(function(child, index) {
            console.log(this.children[index]);
        }.bind(this));
    }
}
szarik.showChildren()
////////////////
class Cat {
    constructor(color) {
        this._color = color
    }
    //metafora pobierajaca zawartosc _color
    getColor() {
        return this._color
    }
    setColor(value) {
        if(typeof value === 'string') {
            this._color = value;
    } else {
        console.log('wartosc nieprawidlowa')
    }
}}
const kotek = new Cat('czarny')

class Dog {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.getColor = () => color;
        this.setColor = (color) => _color = color;
    }
}

const fafik = new Dog('fafik', "brazowy")

class Car2 {
    constructor(name, counter = 100000, year = 2000) {
        this.name = name;
        let _counter = counter
        let _year = year;
        let _changeNumber = 0;

        // this.getYear = function() {
        //     return _year;
        // } 
        this.getYear = () => _year;

        this.setCounter = function(value) {
            _changeNumber++;
            return _counter = value;
        }
        this.getCounter = function() {
            if(_changeNumber) alert(`uwazaj licznik zmieniony ${_changeNumber}`);
            return _counter;
        }
        this.showCarAge = function(year) {
            return year - _year;
        }
    }
}

const polonez2 = new Car2('polonez caro', 25000, 2009);