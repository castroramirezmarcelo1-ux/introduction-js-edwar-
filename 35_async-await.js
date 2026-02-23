// Async  await
// Son caracteristicas de JS que facilitan trabajar con funciones asíncronas permitiendo escribir código que se parece más al sincrono y es más fácil de leer

// Antes del 2025 se usaba .then() y catch(), pero ahora se usa async y await, que internamente siguen usando promesas.

// async: Declara una funcion asincronica, que siempre devuelve una promesa
// await: Pausa la ejecucion de la funcion async hasta que una promesa se resuelve o rechaza, devolviendo como resultado una promesa.

// ================================================================================
// Ejemplo de una función que se cumple

function downloadNewClients(){

return new Promise(resolve => {
    console.log("Descargando clientes... espere por favor.");
    
    setTimeout(() => {
        resolve("Los clientes fueron descargados.")
        }, 3000);
    })
};
function downloadLastOrders(){

return new Promise(resolve => {
    console.log("Descargando las ultimas ordenes... espere por favor.");
    
    setTimeout(() => {
        resolve("Las ultimas ordenes fueron descargadas.")
        }, 7000);
    })
};

// downloadNewClients();

// async function app() {
//     try {
//         const result = await downloadNewClients();

//         // Código bloqueado hasta que se resuelva la promesa
//         console.log("Código que si se bloquea");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// app();
// console.log("Código que no se bloquea");

async function app() {
    try {
        // const clients = await downloadNewClients();
        // const lastOrders = await downloadNewClients
       
        // Código bloqueado hasta que se resuelva la promesa
        // console.log("Código que si se bloquea");
        // console.log(clients);
        // console.log(lastOrders)

        // Ahora se va a intentar una forma mas eficiente sin que dependa una de la otra

const result = await Promise.all([downloadNewClients(), downloadLastOrders()])

// console.log("Código que si se bloquea");
console.log(result[0]);
console.log(result[1]);

    } catch (error) {
        console.log(error);
    }
}

app();
console.log("Código que no se bloquea");