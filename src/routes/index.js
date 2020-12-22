
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
    console.log(typeof req.body);
    console.log(req.body);
    // const datos = JSON.parse(req.body);
    // datos.forEach(element => console.log(element));
    const respuesta = {mensaje1: "Formulario recibido correctamente!!"};
    res.json(respuesta);
});

// exports my routes:
module.exports = router;
