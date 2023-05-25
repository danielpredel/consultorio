var express = require('express');
var router = express.Router();
const medicinas = [{
  nombre: 'Ibuprofeno',
  descripcion: 'El ibuprofeno es un antiinflamatorio no esteroideo, utilizado frecuentemente como antipirético, analgésico y antiinflamatorio',
  foto: 'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwb718b047/images/product/7500093754352_A.jpg',
  laboratorio: 'Nodrim',
  precio: 50
}, {
  nombre: 'Omeprazol',
  descripcion: 'El omeprazol se utiliza en el tratamiento de la dispepsia, úlcera péptica, enfermedades por reflujo gastroesofágico y el síndrome de Zollinger-Ellison',
  foto: 'https://resources.claroshop.com/imagenes-sanborns-ii/1200/7502216792920.jpg',
  laboratorio: 'ULTRA',
  precio: 64
}, {
  nombre: 'Paracetamol',
  descripcion: 'El paracetamol, también conocido como acetaminofén o acetaminofeno o p-Acetilaminofenol, es un fármaco con propiedades analgésicas y antipiréticas utilizado principalmente para tratar la fiebre y el dolor leve y moderado, aunque su eficacia en el alivio de la fiebre en niños no está clara',
  foto: 'https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1028081_A_1280_AL.jpg',
  laboratorio: 'PHARMAlife',
  precio: 24
}, {
  nombre: 'Ketorolaco',
  descripcion: 'El ketorolaco es un antiinflamatorio no esteroideo de la familia de los derivados heterocíclicos del ácido acético, con frecuencia usado como antipirético, antiinflamatorio y analgésico. Es el primer AINE para uso endovenoso y actúa inhibiendo la síntesis de prostaglandinas',
  foto: 'https://cdn.shopify.com/s/files/1/1547/5375/products/7501277093038.jpg?v=1678822994',
  laboratorio: 'APOTEX',
  precio: 27
}, {
  nombre: 'Diclofenaco',
  descripcion: 'El diclofenaco es un fármaco inhibidor relativamente no selectivo de la ciclooxigenasa y miembro de la familia de los antiinflamatorios no esteroideos. Está indicado para reducir inflamaciones y como analgésico. Se puede usar para reducir los cólicos menstruales. El diclofenaco es un derivado fenilacético',
  foto: 'https://chedrauimx.vtexassets.com/arquivos/ids/14650041/7502216803862_00.jpg?v=638190782597430000',
  laboratorio: 'avivia',
  precio: 33
}, {
  nombre: 'Epinefrina',
  descripcion: 'La adrenalina, también conocida como epinefrina por su Denominación Común Internacional, es una hormona y un neurotransmisor. Aumenta la frecuencia cardíaca, contrae los vasos sanguíneos, dilata las vías respiratorias',
  foto: 'https://c8.alamy.com/compes/p4gde4/saint-louis-estados-unidos-agosto-24-2016-auto-inyector-epipen-usado-para-el-tratamiento-de-reacciones-alergicas-p4gde4.jpg',
  laboratorio: 'Primatene',
  precio: 390
}, {
  nombre: 'Aspirina',
  descripcion: 'El ácido acetilsalicílico o AAS, conocido popularmente como aspirina, nombre de una marca que pasó al uso común, es un fármaco de la familia de los salicilatos. Se utiliza como medicamento para tratar el dolor, la fiebre y la inflamación, debido a su efecto inhibitorio, no selectivo, de la ciclooxigenasa',
  foto: 'https://www.farmalisto.com.mx/78988/comprar-aspirina-500-mg-caja-con-40-tabletas-precio.jpg',
  laboratorio: 'BAYER',
  precio: 43
}, {
  nombre: 'Salbutamol',
  descripcion: 'El salbutamol o albuterol es un agonista β2 adrenérgico de efecto rápido utilizado para el alivio del broncoespasmo en padecimientos como el asma y la enfermedad pulmonar obstructiva crónica',
  foto: 'https://curitek-1e041.kxcdn.com/wp-content/uploads/2023/03/SALBUTAMOL-5-mg.jpg',
  laboratorio: 'Salucom',
  precio: 63
}, {
  nombre: 'Amoxicilina',
  descripcion: 'La amoxicilina es un antibiótico semisintético derivado de la penicilina. Se trata de una amino penicilina. Actúa contra un amplio espectro de bacterias, tanto Gram positivos como Gram-negativos',
  foto: 'https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1313142_A_1280_AL.jpg',
  laboratorio: 'PHARMAlife',
  precio: 45
}, {
  nombre: 'Penicilina',
  descripcion: 'Las penicilinas son antibióticos del grupo de los betalactámicos empleados en el tratamiento de infecciones provocadas por bacterias sensibles. La mayoría de las penicilinas son derivados del ácido 6-aminopenicilánico, difiriendo entre sí según la sustitución en la cadena lateral de su grupo amino',
  foto: 'https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7502009340154_1.png',
  laboratorio: 'Lakeside',
  precio: 42
}];

/* GET home page. */
router.get('/', function (req, res, next) {
  let nombre = req.query.nombre.toLowerCase();
  nombre = nombre[0].toUpperCase() + nombre.substring(1);
  console.log(nombre);
  res.send(medicinas.find(medicina => medicina.nombre == nombre));
});

module.exports = router;
