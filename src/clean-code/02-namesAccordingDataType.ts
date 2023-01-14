//. Array o Arreglos

//! Malo 
const fruit = ['Manzana','Pera','Platano']

//? Regular 
const fruitList = ['Manzana','Pera','Platano']

//* Bueno*/  
const fruits = ['Manzana','Pera','Platano']

//. Mejor 
const fruitNames = ['Manzana','Pera','Platano']

//. Booleans o Boleanos

//! Malo

const Open = true;
const write = true;
const active = true;
const noValues = true;
const noEmpty = true;

//* Mejor

const isOpen = true;
const isWrite = true;
const isActive = true;
const hasValues = true;
const isEmpty = true;

//. Numeros o Numbers

//! Malo

const cars = 1;
const Fruits = 2;

//* Mejor */

const totalOfCars = 2;

const minFruits = 3;
const maxFruits = 4;
const totalFruits = 19;

//. Funciones o Function

//! Malo

function createUserIfNotExists() {  }
function updateUserIfNotEmpty() {  }
function sendEmailIfFieldsValid() {  }

//* Mejor *

function createUser() {  }
function updateUser() {  }
function sendEmail() {  }