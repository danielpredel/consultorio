const nodemailer = require("nodemailer"); //correo

function conectionEmail() {
  return (transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "victor000hugo10@gmail.com",
      pass: "aiqpxzzmenwfnyud",
    },
  }));
}

function CrearMensaje(correo, asunto, descripcion) {
  descripcionMen="Recibimos su mensaje, se atenderá lo antes posible!";
  return (mensaje = {
    from: "Victor Hugo Jimenez Prado",
    to: correo,
    subject: asunto,
    text: descripcionMen,
    html: "<h1>" + asunto + "</h1><p>" + descripcionMen + "</p>",
  });
}
function CrearMensajeAdmin(correo, asunto, descripcion) {
  asuntoAdm= "NUEVO MENSAJE: "+asunto;
  descripcionAdm="Recibio un correo de: "+correo+ " con el siguiente mensaje: " +descripcion;
  return (mensaje = {
    from: "Consultorio Don Julio",
    to: "jimenez.victor.1b.m@gmail.com",
    subject: asuntoAdm,
    text: descripcionAdm,
    html: "<h1>" + asuntoAdm + "</h1><p>" + descripcionAdm + "</p>",
  });
}

module.exports={ conectionEmail,CrearMensaje,CrearMensajeAdmin};
