'use strict';

// x = 10;
// console.log(x);

// var / let / const


// var x = 10;
// var x = 20;
// console.log(x);

// // let y = 10;
// // let y = 20;
// // console.log(y);


// var name = 'Cingiz';

// function ShowName() {
//     var name = 'Fexrin';
//     console.log(name);
// }

// ShowName();
// console.log(name);



// const username = 'Elshen';
// // username = 'Ismayil'
// console.log(username);


// const Person = {
//     ad: "Ismayil"
// }

// const Person = 10

// Person.ad = 'Cingiz';


// const users = ['Elsen','Oruc','Kamran'];
// users = 'Welcome'
// users.push('Seymur');



// strict mode




// Object Literals
// var Person = {
//     ad: 'Cingiz',
//     yas: 25
// }

// // create()
// var User = Object.create({
//     firstname: "Fexrin",
//     age: 25
// })

// // Object 
// var Admin = new Object();

// var Student = {};
// Student.lastname = 'Aliyev';
// Student.address = 'Baku'


// let Person = {
//     ad: "Fexrin",
//     soyad: "Aliyev",
//     yas: 25,
//     tevellud: function() {
//         return new Date().getFullYear() - this.yas
//     },
//     tamAd: function(){ 
//         return this.ad + " " + this.soyad
//     },
//     address: {
//         city: 'Baku',
//         street: 'Naxcivani st. 57'
//     }
// }

// Person.salary = 2000;
// delete Person.yas;
// console.log(Person);

// console.log(Person.tevellud());
// console.log(Person.tamAd());
// console.log(Person.address);
// console.log(Person['yas']);

// for(let x in Person) {
//     console.log(Person[x]);
// }

// function Hello() {
//     console.log(this);
// }

// Hello()

// document.getElementById('btn').onclick = function(){
//     console.log(this);
//     document.body.style.backgroundColor = 'red'
// }


// console.log(this);


// let Asus = {
//     model: 'Asus',
//     marka: "Zenbook",
//     price: 2000
// }

// let Apple = {
//     model: "Macbook",
//     marka: "Pro",
//     price: 3500
// }


// let compInfo = {
//     compName: function() {
//         return this.model + " " + this.marka
//     },
//     compPrice: function() {
//         return "$" + (this.price / 1.7).toFixed(0)
//     },
//     compMemory: function(HDD,SSD) {
//         return "HDD: " + HDD + "GB || SSD: " + SSD + "GB"
//     }
// }

// console.log(compInfo.compName.call(Asus));
// console.log(compInfo.compMemory.call(Asus,512,128));
// console.log(compInfo.compMemory.apply(Apple,[1024,256]));


// // bind
// var obj = {
//     num1: 10,
//     num2: 20
// }

// function Calculate(x,y) {
//     return this.num1 + this.num2 + x + y
// }


// let new_func = Calculate.bind(obj);
// console.log(new_func(3,5,9))


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     age: 22
//     get lang() {
//       return this.language;
//     },
//     set birthDate() {
//         return new Date().getFullYear() - this.age
//     }
//   };


//   console.log(person.lang);

//   const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     lang() {
//       return this.language;
//     }
//   };

//   console.log(person1.lang());


//   const person2 = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     lang: function() {
//       return this.language;
//     }
//   };


// function Person(name,age,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }

// let Developer = new Person('Cingiz',25,'Front-end Developer');
// let Designer = new Person('Xelilbey',30,'UX/UI Designer');


// console.log(Developer.name);
// console.log(Designer.name);


class Person {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary
    }

    getDetails() {
        console.log(`Worker name is ${this.name}.Salary is ${this.salary} AZN`); 
    }
}


// class Teacher extends Person {

// }

// console.log(Teacher);
// let Teacher = new Person(1,'Ali',2500)
// let Mentor = new Person(2,'Seymur',500)
// Teacher.getDetails();
// Mentor.getDetails();

// let User = {
//     id: 1,
//     groupName: "P324",
//     startDate: '28-03-2022'
// }

// let x = User;
// x.id = 2

// console.log(User.id);
// console.log(User);


new Date()

function User(id,name) {
    this.id = id;
    this.name = name
}

User.prototype.salary = 2000;
User.prototype.tevellud = function() {

} 

let Admin = new User(1,'Seymur');
console.log(Admin);


let name = 'Code Academy';
let new_name = name.split('');

// ['Code','Academy']
// 'Code Academy'