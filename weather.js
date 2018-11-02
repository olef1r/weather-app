const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/91b2886cb6a700f4b29001481df49be7/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unanable to connect to Darksyde')
        } else  if (response.statusCode === 400) {
            callback('Unable to fetch data');
        } else  if (response.statusCode === 200) {    
            callback(undefined, {
            temperature: body.currently.temperature
            })
        }
    })
};

module.exports.getWeather = getWeather;