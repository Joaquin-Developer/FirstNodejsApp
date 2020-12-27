
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
    console.log("Body:");
    console.log("Mail: " + req.body[0].mail);
    console.log("Mensaje: " + req.body[0].msg);
    console.log("recorrido :");
    // req.body.forEach(element => console.log(element));
    const respuesta = {mensaje1: "Formulario recibido correctamente!!"};
    res.json(respuesta);
});

// exports my routes:
module.exports = router;
