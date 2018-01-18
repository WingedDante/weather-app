const _REQUEST = require('request');

console.log('Loading geocode');

module.exports.geocodeAddress = (address) => {
    console.log('starting geocode...');
    var encodedAddress = encodeURIComponent(address);

    _REQUEST( {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) =>{
        //console.log(JSON.stringify(response));
        debugger;
        if (response.statusCode == 200 && body.results.length > 0){
    
         console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
         console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
        else if (body.results && body.results.length == 0){
            
            console.log('No results');
        }
        else if (error){
            console.log(error);
        }
        else
         console.log(`Error in HTTP Request: Code ${response.statusCode}`);
    });

}