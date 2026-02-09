// This es una palabra reservada del sistema, o sea que No se puede crear ni funciones ni variables con este nombre

const reservation = {
    userName: "Marcelo",
    lastName: "Castro",
    userAge: 18,
    total: 100000,
    isPaid: false, 

    information: function() {
        console.log(`El Cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago  ${this.isPaid}`);
    }

};

reservation.information();


// Los objetos pueden contener funciones

const reservation2 = {
    userName: "Camilo",
    lastName: "Henao",
    userAge: 20,
    total: 100000,
    isPaid: true, 

    information: function() {
        console.log(`El Cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago  ${this.isPaid}`);
    }

};

// This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar.
// Es obligatorio usar la función de esta manera, porque esta hace referencia al objeto que se esta usando. 
reservation2.information();
reservation2.information();

const reservation3 = {
    userName: "Maicol",
    lastName: "Orozco",
    userAge: 32,
    total: 50000,
    isPaid: false, 

    information: () => {
        console.log(`El Cliente ${this.userName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago  ${this.isPaid}`);
    }

};

// Si se usa Arrow Function no es capaz de leer los datos del contexto, dando como resultado undefined
reservation3.information();
