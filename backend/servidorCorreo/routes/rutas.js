const nodemailer = require("nodemailer"); //correo
const express = require("express");
let msj = require("../mensaje.js");
const { body, param, validationResult } = require("express-validator");
var router = express.Router();
router.post(
  "/enviar",
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
    mensajeAdim = msj.CrearMensajeAdmin(correo, asunto, descripcion);
    console.log(mensaje);
    var transporter = msj.conectionEmail();

    transporter.sendMail(mensaje, (error, info) => {
      if (error) {
        console.log("Error enviando email");
        console.log(error.message);
      } else {
        console.log("Email enviado");
        res.json({ success: true, data: JSON.stringify(
            {correo,asunto,descripcion}
        ) });
      }
    });
    transporter.sendMail(mensajeAdim, (error, info) => {
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
