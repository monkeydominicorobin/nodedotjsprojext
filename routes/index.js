var pagpapahayag = require('express');
var balasador = pagpapahayag.Router();

/* GET home page. New naming convention for me.*/
balasador.get('/', function(pakiusap, tugon) {
  tugon.render('index');
});

balasador.get('/:time', function(pakiusap, tugon){
    function unixToNatural(palaboy){
        var petsa = new Date(palaboy * 1000);
        var buwan = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var kuninbuwan = buwan[petsa.getMonth()];
        var kuninaraw = petsa.getDate();
        var kunintaon = petsa.getFullYear();
        
        var kalalabasan = kuninbuwan + ' ' + kuninaraw + ', ' + kunintaon; 
        return kalalabasan;
        
    }
    if(!isNaN(pakiusap.params.time)) {
        var ipakita = unixToNatural(pakiusap.params.time);
        var impormasyon = { unix: pakiusap.params.time,  natural: ipakita};
        tugon.json(impormasyon);
    }   else {
        var gregoryan = new Date(pakiusap.params.time);
        if(!isNaN(gregoryan)) {
            var unix = gregoryan / 1000;
            var impormasyon = { unix: unix, natural: pakiusap.params.time };
            tugon.json(impormasyon);
            
        }
        else {
                tugon.json({ unix: null, natural: null });
            }
    }
//   var impormasyon = {  time: pakiusap.params.time  };
//    tugon.json(impormasyon);
//    tugon.send(pakiusap.params.time);
});

module.exports = balasador;
