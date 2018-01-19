console.log('Starting weather data');

var _REQUEST = require('request');

module.exports.getWeatherData = (geocords, callback) => {
    console.log('Starting Weather data call');

    _REQUEST( {
        url: `https://api.darksky.net/forecast/3b911d73c54536d38cab17d910475ac0/${geocords.latitude},${geocords.longitude}`,
        json: true
    }, (error, response, body) =>{
        // console.log(JSON.stringify(response));
        debugger;
        if (response.statusCode == 200 ){
            callback(undefined, 
                {
                    temp: body.currently.temperature,
                    feels: body.currently.apparentTemperature
                }
            );
        //  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        //  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
        // else if (body.results && body.results.length == 0){
            // callback('No results');
            // console.log('No results');
        // }
        else if (error){
            callback(error);
            // console.log(error);
        }
        else
        callback(`Error in HTTP Request: Code ${response.statusCode}`)
        //  console.log(`Error in HTTP Request: Code ${response.statusCode}`);
    });
}



//3b911d73c54536d38cab17d910475ac0
// https://api.darksky.net/forecast/3b911d73c54536d38cab17d910475ac0/40.9054426,-81.1002633