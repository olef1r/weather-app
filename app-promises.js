const yargs = require('yargs');
const axios = require('axios')

const argv = yargs
    .option({
        a: {
            demand: true,
            alias: 'addess',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    let encodedAddress = encodeURIComponent(argv.a);
    let geoCodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=N0XAlfQXZILw9DC1MNtbD7Rs66LRgloK&location=${encodedAddress}`

    axios.get(geoCodeUrl)
    .then((response) => {
        
        let lat = response.data.results[0].locations[0].latLng.lat;
        let lng = response.data.results[0].locations[0].latLng.lng;

        let weatherUrl = `https://api.darksky.net/forecast/91b2886cb6a700f4b29001481df49be7/${lat},${lng}`

        axios.get(weatherUrl)
        .then((response) => {
            let temperature = response.data.currently.temperature
            console.log(temperature)
        })
        .catch(e => console.log(e))
        
    }).catch(e => {
        if (e.errno === 'ENOTFOUND') {
            console.log('Unable to connect to serve')
        }
    })