
const _YARGS = require('yargs');

const _GEOCODE = require('./services/geocode.js');
const _WEATHER = require('./services/weather-data.js');

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

//console.log(_ARGV);

_GEOCODE.geocodeAddress(_ARGV.a, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(JSON.stringify(results, undefined, 2));
        _WEATHER.getWeatherData({latitude:results.latitude, longitude: results.longitude}, (errorMessage, results)=>{
            if (errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(JSON.stringify(results, undefined, 2));
            }
        });
    }
});


