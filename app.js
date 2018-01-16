const _REQUEST = require('request');
const _YARGS = require('yargs');

const _ARGV = _YARGS
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to get weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(_ARGV);

_REQUEST( {
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1623%20south%20linden%20ave%20alliance%20ohio',
    json: true
}, (error, response, body) =>{
    if (response.statusCode == 200){
     console.log(JSON.stringify(`Latitude: ${body.results[0].geometry.location.lat}`, undefined, 4));
     console.log(JSON.stringify(`Longitude: ${body.results[0].geometry.location.lng}`, undefined, 4));
    }
     else
     console.log(`Error in HTTP Request: Code ${response.statusCode}`);
});