const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode.js')
const weather = require('./weather.js')

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address)

        weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 2))
            }
        });
    }
});
