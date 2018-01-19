const _REQUEST = require('request');

console.log('Loading geocode');

module.exports.geocodeAddress = (address, callback) => {
    console.log('starting geocode...');
    var encodedAddress = encodeURIComponent(address);

    _REQUEST( {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) =>{
        //console.log(JSON.stringify(response));
        debugger;
        if (response.statusCode == 200 && body.results.length > 0){
            callback(undefined, 
                {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                }
            );
        //  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        //  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
        }
        else if (body.results && body.results.length == 0){
            callback('No results');
            // console.log('No results');
        }
        else if (error){
            callback(error);
            // console.log(error);
        }
        else
        callback(`Error in HTTP Request: Code ${response.statusCode}`)
        //  console.log(`Error in HTTP Request: Code ${response.statusCode}`);
    });

}