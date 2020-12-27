
const express = require("express");
const router = express.Router();

// create my routes:

router.get("/", function(req, res) {
    res.render("index.html", { title: "First Node.js WS" });    // vistas
    // res.sendFile(__dirname + "/views/index.html");
});

router.get("/contact", function(req, res) {
    res.render("contact.html", { title: "Contactame" });
});

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

// exports my routes:
module.exports = router;
