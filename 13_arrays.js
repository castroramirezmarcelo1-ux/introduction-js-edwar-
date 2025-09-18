// Arrays en JS

const numbers = [10,20,30,80,100];

console.log(numbers);

// Otra forma de visualizacion en tabla
console.table(numbers);

const months = new Array("May","January","July","June");

console.table(months);

const miArray = ['Hello', 17, true, false, null, {myName: "Marcelo", myJob: "Student"}, [3172293]];

console.log(miArray);

// Consultar un elemento de un arreglo
console.log(numbers[2]);
console.log(miArray[5]);

// Metodo para conocer la longitud de un arreglo
console.log("Marcelo su arreglo tiene: " + numbers.length + "elementos");

// Un iterador con forEach 

const numbers2 = [10, 20, 30, 80, 100, 7, 8];
numbers2.forEach(function(number){
    console.log(number);
});

months.forEach(function(month){
    console.log(month);
});

miArray.forEach(function(element){
    console.log(element);
})




