var express = require('express');
var nodemailer = require("nodemailer"); //correo
let msj = require("../mensaje.js");
const { body, param, validationResult } = require("express-validator");
var router = express.Router();

/* POST home page. */
router.post(
  "/",
  [
    body("correo").not().isEmpty().isString(),
    body("asunto").not().isEmpty().isString(),
    body("descripcion").not().isEmpty().isString(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ success: false, err: JSON.stringify(errors) });
      return;
    }
    const { correo, asunto, descripcion } = req.body;

    mensaje = msj.CrearMensaje(correo, asunto, descripcion);
    console.log("CLIENTEEEE");
    console.log(mensaje);
    var transporter = msj.conectionEmail();
    
    transporter.sendMail(mensaje, (error, info) => {
      if (error) {
        console.log("Error enviando email");
        console.log(error.message);
      } else {
        console.log("Email enviado Cliente");
        res.json({ success: true, data: JSON.stringify(
          {correo,asunto,descripcion}
          ) });
        }
      });
      var transporter2 = msj.conectionEmail();
      mensajeAdim = msj.CrearMensajeAdmin(correo, asunto, descripcion);
    transporter2.sendMail(mensajeAdim, (error, info) => {
      if (error) {
        console.log("Error enviando email");
        console.log(error.message);
      } else {
        console.log("Email enviado Admin");
        res.json({ success: true, data: JSON.stringify(
            {correo,asunto,descripcion}
        ) });
      }
    });
  }
);


module.exports = router;