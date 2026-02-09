// Notificacion API
// La notifications api es una interfaz del navegador que permite a las aplicaciones

const button = document.querySelector(".button");

button.addEventListener('click', () => {
    console.log("You made click");
    Notification.requestPermission().then(Permission => {
        if(Permission === "granted"){
            new Notification("Esta es una notificacion de Marcelo",{
                body : "Aprendiendo JS en el SENA"
            });
        }else{
            console.log("Permiso denegado");
        }
    });
});