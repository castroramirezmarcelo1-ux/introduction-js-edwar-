// Marcelo Castro Ramirez
// Metodos para objetos
// Con esta linea de codigo garantizo buenas practicas
"use strict"

const product = {
    productName : "sensor de humedad"
    price : 300;
    available : true;
}

const speedMax = 80;
// speedMax = 70;
console.log(speedMax);

// Aunque el objeto product este declarado como constante permite agregar propiedades

product age = 42;
console.log(product);

// Con el metodo o funcion freeze bloqueamos el objeto para que no se pueda agregar mas propiedades
Object.freeze(product);

// Vamos a agregar una nueva propiedad de color
// product.color = "red";

console.log("El documento esta bloqueado?: " + object.isFrozen(product));

let response;
if(object.isFrozen(product)) {
    response = "Si";
}else{
    response = "No"
}

console.log("¿El objeto esta bloqueado?: " + response);