
"use strict"
const numbers = [0, 12, 8, 9, 5];

// Agregar elementos a nu arreglo, pero con este metodo se requiere conocer la longitud del arreglo
//  let numbersLenght = numbers.length
//  console.log(numbersLenght);

//  numbers [numbersLenght] = 100;

//  console.log(numbers);

// Con el metodo push se agregan elementos al final del arreglo 
//  numbers.push(700);
 
// console.log(numbers);

// Método unshift para agregar elementos al inicio de un arreglo
numbers.unshift(-1, -2, -3);
// console.table(numbers);

// Método para eliminar el último elemento de mi arreglo
// numbers.pop();

// Método shift para eliminar el primer elemento de mi arreglo
// numbers.shift();

// Método splice elimina todos los elementos a partir del indice asignado.
numbers.splice(2);
console.table(numbers);

