var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Logan'
    }
    setTimeout(()=>{callback(user);}, 3000);
    
};



getUser(1234, (user)=>{
    console.log(user);
});

//http://maps.googleapis.com/maps/api/geocode/json