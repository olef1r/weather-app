const request = require('request');

let geoCodeAddress = address => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);
        
        request ({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=N0XAlfQXZILw9DC1MNtbD7Rs66LRgloK&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject ('Unable to connect to  services.')
            } else if (body.results[0].locations[0].latLng.lat === 39.390897){
                reject('Unable to find that address')
            } else {
                resolve ({
                    address: body.results[0].providedLocation,
                    lat: body.results[0].locations[0].latLng.lat,
                    lng:body.results[0].locations[0].latLng.lng 
                })
            }
        })
    })
        

};

geoCodeAddress('l0000000000')
.then((location) => {
    console.log(JSON.stringify(location, undefined, 2))
})
.catch(error => console.log(error))

module.exports = {
    geocodeAddress
}

