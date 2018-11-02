const request = require('request');

let geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
    console.log(encodedAddress)

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=N0XAlfQXZILw9DC1MNtbD7Rs66LRgloK&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to  services.')
        } else if (body.results[0].locations[0].latLng.lat === 39.390897){
            callback('Unable to find that address')
        } else {
            callback(undefined, {
                address: body.results[0].providedLocation,
                lat: body.results[0].locations[0].latLng.lat,
                lng:body.results[0].locations[0].latLng.lng 
            })
             //console.log(body.results[0].locations[0].latLng.lat);
        }
    })
}
module.exports = {
    geocodeAddress
}
