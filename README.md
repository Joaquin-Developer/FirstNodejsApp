# FirstNodeApp
Mi primer aplicación web backend con Node.Js

## Requisitos:
- Npm (6.14.4), node (10.19.0) instalados

## Uso:
- En `firstNodeJsApp/` ejecutar el comando `npm run dev`
- En un navegador web, dirigirse a : `127.0.0.1:3000` (localhost, puerto 3000)

### Prueba de interacción con el backend desde el frontend:
- Dirigirse a `http://127.0.0.1:3000/contact`
- Llenar el formulario y enviarlo.
- En la consola (Ctrl + Shift + I en Chrome), se podrá visualizar la respuesta del backend
- Código del backend: 
```javascript
router.post("/sendform", function(req, res) {
    const mail = req.body[0].mail;
    const mensaje = req.body[0].msg;
    console.log(`Mail: ${mail}`);
    console.log(`Mensaje: ${mensaje}`);
    const respuesta = {
        mensaje1: "Formulario recibido correctamente!!",
        mensaje2: `Tu mail es: ${mail} y tu mensaje fué: ${mensaje}`
    };
    res.json(respuesta);
});
```
