// Solicitar permisos para uso de camara y microfono

const button = document.querySelector(".button");

button.addEventListener('click', async()  => {

    try {

        await navigator.mediaDevices.getUserMedia({video: true, audio: true});
    ;

    const permission = await Notification.requestPermission();
     console.log(`Estado del permiso ${permission}`);

    if(permission === 'granted') {
    new Notification("Permisos concedidos", {
        body: "¡Cámara y microfono activados",
        icon: "/assets/icons/Lucho.jfif"
        });
    }else{
        console.log('Permisos denegados')       
    }
}catch(error){
        console.log('Error al solicitar los permisos', error);
        alert(`No se consedieron los permisos solicitados`)
    }


});