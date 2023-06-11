var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send([
        {
            nombre: 'Meredith',
            apellido: 'Grey',
            especialidad: 'Cirugía General',
            correo: 'meredithgrey@gmail.com',
            edad: 40,
            sexo: 'Femenino',
            foto: 'https://s2.r29static.com/bin/entry/506/x,80/2031793/image.jpg'
        },
        {
            nombre: 'Addison',
            apellido: 'Montgomery',
            especialidad: 'Obstetricia y Ginecología',
            correo: 'addisonmontgomery@gmail.com',
            edad: 45,
            sexo: 'Femenino',
            foto: 'https://akns-images.eonline.com/eol_images/Entire_Site/202197/rs_1200x1200-211007192710-1200-Kate-Walsh-mp.jpg'
        },
        {
            nombre: 'Shaun',
            apellido: 'Murphy',
            especialidad: 'Cirugía General',
            correo: 'shaunmurphy@gmail.com',
            edad: 30,
            sexo: 'Masculino',
            foto: 'https://elcomercio.pe/resizer/FCeXYf00wyk0TZ8XKPqbb3QwvK4=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VRFJQ5H3MZA6RBTD52X2CB3LKA.jpg'
        },
        {
            nombre: 'Conrad',
            apellido: 'Hawkins',
            especialidad: 'Cirugía General',
            correo: 'conradhawkins@gmail.com',
            edad: 38,
            sexo: 'Masculino',
            foto: 'https://tv-fanatic-res.cloudinary.com/iu/s--IIavQCwM--/f_auto,q_auto/v1516316519/matt-czuchry-as-dr-conrad-hawkins-the-resident'
        },
        {
            nombre: 'Gregory',
            apellido: 'House',
            especialidad: 'Nefrología e Infectología',
            correo: 'gregoryhouse@gmail.com',
            edad: 58,
            sexo: 'Masculino',
            foto: 'https://www.esteve.org/wp-content/uploads/2014/02/house.jpg'
        },
        {
            nombre: 'Lisa',
            apellido: 'Cuddy',
            especialidad: 'Endocrinología',
            correo: 'lisacuddy@gmail.com',
            edad: 47,
            sexo: 'Femenino',
            foto: 'https://elcomercio.pe/resizer/_ehxOcWqMIXBMYd0PsJ8AwsQVhE=/1200x1200/smart/filters:format(jpeg):quality(75)/dvgnzpfv30f28.cloudfront.net/08-13-2020/t_30fb0ee6e97f499299eb6b7341fa384a_name_dr_house.jpg'
        },
        {
            nombre: 'James',
            apellido: 'Wilson',
            especialidad: 'Oncólogo',
            correo: 'jameswilson@gmail.com',
            edad: 45,
            sexo: 'Masculino',
            foto: 'https://i.pinimg.com/originals/06/ac/d8/06acd88288fad9d073d387a45f937250.jpg'
        },
        {
            nombre: 'Derek',
            apellido: 'Shepherd',
            especialidad: 'Neurología',
            correo: 'derekshepherd@gmail.com',
            edad: 49,
            sexo: 'Masculino',
            foto: 'https://elcomercio.pe/resizer/02f9Q-CCurV2c8vK5cHxX0Rky84=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GPWVKK5ADJF2ZKYJN3Y3WJKOQQ.jpg'
        },
        {
            nombre: 'Emiliano',
            apellido: 'Navarro',
            especialidad: 'Medicina Familiar y Comunitaria',
            correo: 'emilionavarro@gmail.com',
            edad: 49,
            sexo: 'Masculino',
            foto: 'https://media.istockphoto.com/id/1203995945/es/foto/retrato-de-hombre-maduro-doctor-que-lleva-abrigo-blanco-de-pie-en-el-pasillo-del-hospital.jpg?s=612x612&w=0&k=20&c=TLFMEYbqmt5noGITcY6PRgaX4MfmfE2TYXehgiCDDuk='},
        {
            nombre: 'Santiago',
            apellido: 'Morales',
            especialidad: 'Anestesiología',
            correo: 'santiagomorales@gmail.com',
            edad: 35,
            sexo: 'Masculino',
            foto: 'https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000'
        },
        {
            nombre: 'Leonardo',
            apellido: 'Fuentes',
            especialidad: 'Infectología',
            correo: 'leofuentes@gmail.com',
            edad: 49,
            sexo: 'Masculino',
            foto: 'https://elcomercio.pe/resizer/02f9Q-CCurV2c8vK5cHxX0Rky84=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GPWVKK5ADJF2ZKYJN3Y3WJKOQQ.jpg'
        },
        {
            nombre: 'Gabriel',
            apellido: 'Mendoza',
            especialidad: 'Otorrinolaringología',
            correo: 'gabrielmendoza@gmail.com',
            edad: 66,
            sexo: 'Masculino',
            foto: 'https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp'
        },
        {
            nombre: 'Adrián',
            apellido: 'Cervantes',
            especialidad: 'Urología',
            correo: 'adriancervantes@gmail.com',
            edad: 31,
            sexo: 'Masculino',
            foto: 'https://i.pinimg.com/originals/ce/63/47/ce63475562f960ede351c2533415adc5.jpg'
        },
        {
            nombre: 'Valentina',
            apellido: 'Castillo',
            especialidad: 'Ginecología',
            correo: 'valentinacastillo@gmail.com',
            edad: 67,
            sexo: 'Femenino',
            foto: 'https://www.ecestaticos.com/file/d02137e2afb167582c22fb98077f2265/1630407178-2-pilar-tornos.jpg'
        },
        {
            nombre: 'Camila',
            apellido: 'Espinoza',
            especialidad: 'Nefrología',
            correo: 'camiespinoza@gmail.com',
            edad: 32,
            sexo: 'Femenino',
            foto: 'https://st4.depositphotos.com/1188954/20017/i/600/depositphotos_200171296-stock-photo-pretty-female-doctor-shot-in.jpg'
        },
        {
            nombre: 'Fernanda',
            apellido: 'Guzmán',
            especialidad: 'Dermatología',
            correo: 'ferguzman@gmail.com',
            edad: 33,
            sexo: 'Femenino',
            foto: 'https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?w=2000'
        },
        {
            nombre: 'Isabella',
            apellido: 'Rosales',
            especialidad: 'Cardiología',
            correo: 'isarosales@gmail.com',
            edad: 27,
            sexo: 'Femenino',
            foto: 'https://www.eluniversal.com.mx/resizer/4eIUHOAZfto7OWaeXCRUiRlexCE=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/7NZOYSQDIZHQNNKQGQ4GEXDNF4.jpg'
        },
        {
            nombre: 'Daniela',
            apellido: 'Torres',
            especialidad: 'Pediatría',
            correo: 'danitorres@gmail.com',
            edad: 31,
            sexo: 'Femenino',
            foto: 'https://st3.depositphotos.com/4678277/13419/i/600/depositphotos_134194196-stock-photo-portrait-of-pretty-female-doctor.jpg'
        }
    ]);
});

module.exports = router;