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
        }
    ]);
});

module.exports = router;