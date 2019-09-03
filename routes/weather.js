// weather.js

var express = require('express');
var router = express.Router();
var request = require('request');

var defaultZip = 90210;

// renders the weather page when targeting the /weather endpoint
router.get('/', function(req,res,next) {    
    render(res,defaultZip);    
});

// handles the submission of zip codes
router.post('/',function(req,res){
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    var zip = req.body.zip;
    if(isValidZip.test(zip)){
        console.log('Valid zip found.');
        render(res,zip);
    } else {
        res.json(500,'Invalid Zip!');
        console.log('Invalid zip!');
    }
});

function render(res, zip){
    request(
        {
            uri: "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us",
            method: "GET",
            qs: {
                units: "imperial",
                APPID: "YOUR KEY HERE"
            }
        },
        function(err, response, body) {
            
            res.render( 'weather', JSON.parse(body) );
        }
    )
}

module.exports = router;