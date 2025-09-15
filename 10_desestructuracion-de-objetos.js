// Marcelo Castro Ramirez
// Desestrcuturacion de objetos

const product = {
    productName : "sensor de humedad";
    price : 300;
    available : true,
}

// Aqui un ejemplo de desestructuracion de objetos
const productPrice = product.price;
const productName = product.productName;

console.log(productPrice);
console.log(product.productName);

// Para que sirve el destructuring? Sirve para extraer la 

const {price, available, productName} = product;

console.log(price. available, productName);