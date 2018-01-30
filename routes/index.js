let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Plomería Especializada' });
});

/* SEND CONTACT MAIL*/

router.post('/contact-mail', function(req, res, next){
    let api_key = 'key-a8db94cc64c40a5cc5e4a9bedb5511af';
    let domain = 'mg.aferplomeria.com';
    let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    console.log(req.body);

    let data = {
        from: 'Formulario de Contacto AFER <form-contacto-afer@afer.mx>',
        to: 'mostrador@aferplomeria.com',
        subject: 'Has sido contactado por un usuario de aferplomeria.com',
        text: 'Nombre : ' + req.body.name + '\n'
            + 'Dirección de Correo : ' + req.body.email + '\n'
            + 'Teléfono : ' + req.body.phone + '\n'
            + 'Mensaje : '+ req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        res.json({mail:true});
    });
});

router.post('/products-mail', function(req, res, next){
    let api_key = 'key-a8db94cc64c40a5cc5e4a9bedb5511af';
    let domain = 'mg.aferplomeria.com';
    let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    console.log(req.body);

    let data = {
        from: 'Formulario de Contacto AFER <form-contacto-afer@afer.mx>',
        to: 'hola@aferplomeria.com',
        subject: 'Han solicitado una cotización desde aferplomeria.com',
        text: 'Nombre : ' + req.body.name + '\n'
        + 'Dirección de Correo : ' + req.body.email + '\n'
        + 'Teléfono : ' + req.body.phone + '\n'
        + 'Compañía : ' + req.body.company + '\n'
        + 'Materiales : '+ req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        res.json({mail:true});
    });
});

module.exports = router;
