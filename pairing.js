const request = require('request');

var getPairing = (coin, callback) =>{
    request({
        url: 'https://bx.in.th/api/',
        json: true
    },(error, response, body) => {
        var filterArray = Object.values(body).filter((aElement) => aElement.secondary_currency === coin);
        if(filterArray.length > 0 && !error){
            var result = {
                pairing_id : filterArray[0].pairing_id,
                primary_currency : filterArray[0].primary_currency,
                secondary_currency : filterArray[0].secondary_currency,
                last_price : filterArray[0].last_price
            }
            callback(undefined,result);
        } else {
            callback(`Unable to find "${coin}"`);
        }
    });  
};

module.exports.getPairing = getPairing