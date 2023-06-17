var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', function (req, res) {
    
    axios.get("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios.json")
    .then(response => {
        console.log(response.data);
    });
    
});

module.exports = router;

