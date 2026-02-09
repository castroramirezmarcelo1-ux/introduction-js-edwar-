// El objeto literal, esta es la forma más común pero no es muy dinámico que digamos
// De esta forma el objeto tiene diferentes variables

const product = {
    productName: "Mouse",
    productPrice: 50000,
    productColor: "red"
}
// Asi se crea
const product2 = {
    productName: "Key Board",
    productPrice: 80000,
    productColor: "blue"
}
 
// ==================================================================

// Objeto constructor
// Este objeto constructor debe contener todos los diferentes valores que van a formar parte del objeto 
// En los parentesis de la funcion llegan los parametros

function Product(productName, productPrice, productColor) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.productColor = productColor;
}

const product3 = new Product("Mouse", 35000,"Green");
const product4 = new Product("Cell phone", 45000, "Black");
const product5 = new Product("PC", 60000, "White");

console.log(product2);
console.log(product3);
console.log(product4);
console.log(product5);
