var express = require('express');
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const axios = require('axios');

router.post('/',
    [
        body("index").not().isEmpty(),
        body("usuario").not().isEmpty().isString(),
    ], 
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.json({ success: false, err: JSON.stringify(errors) });
            return;
        }
        const { index, usuario} = req.body;
        let obj = {
            nombre: "",
            telefono: "",
            fecha: "",
            paciente: ""
        };

        axios.get("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios/"+usuario+"/.json")
        .then(response => {
            obj.nombre = response.data.nombre +" "+response.data.apellidos;
            obj.telefono = response.data.telefono;
            console.log(obj);
        });

        axios.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas/"+index+"/.json")
        .then(response => {
            obj.fecha = response.data.diaNombre+" " + response.data.dia + " de "+ response.data.mesNombre+ " del "+ response.data.year + " a las " + response.data.hora+":00";
            obj.paciente = response.data.paciente;
            console.log(obj);

            res.send(obj);
        });
});

module.exports = router;

