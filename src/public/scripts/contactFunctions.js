
document.getElementById("btnSendForm").addEventListener("click", async function(event) {
    event.preventDefault();
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;

    if (mail.length === 0 || message.length === 0){
        alert("Debe completar todos los datos");
        return;
    }
    const datos = [{  // info JSON que le vamos a mandar al backend
        mail: mail,
        msg: message
    }];

    try {   // aquí enviamos datos al seridor: (con axios)
        let init = {
            method: "POST",
            headers: { // cabeceras HTTP
                // vamos a enviar los datos en formato JSON
                'Content-Type': 'application/json'
            },
            // el cuerpo de la petición es una cadena de texto 
            // con los datos en formato JSON
            body: 'Hola'
        };

        let response = await fetch("/sendform", init);

        if (response.ok) {
            // si todo salió good:
            let respuesta = await response.json();
            console.log(respuesta.mensaje1);
            // console.log(respuesta.mensaje2);

        } else {
            throw new Error(response.statusText);
        }

    } catch (exception) {
        console.error(exception);
        alert("Se produjo el siguiente error: " + exception);
    }

});
