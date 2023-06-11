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
  return (mensaje = {
    from: "Victor Hugo Jimenez Prado",
    to: correo,
    subject: asunto,
    text: descripcion,
    html: "<h1>" + asunto + "</h1><p>" + descripcion + "</p>",
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
    html: "<h1>" + asunto + "</h1><p>" + descripcion + "</p>",
  });
}

module.exports={ conectionEmail,CrearMensaje,CrearMensajeAdmin};
