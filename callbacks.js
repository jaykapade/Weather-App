/* var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Adnan'
    };
    setTimeout(() => {
        callback(user);    
    }, 3000);
    
}

getUser(45, (userObject) => {
    console.log(userObject);
}); */

const request = require('request');
var API = "AIzaSyD7yTmKO5z92YJ1x1_fRRf2uFjTFBmXNtk"

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=" + API,
    json: true
}, (error, response, body) => {
    //console.log(JSON.stringify(body, undefined, 2));
    if(body.status != "OK"){
        console.log('API Key expired. Please renew');
    }else{
        console.log('Address:', body.results[0].formatted_address);
        console.log('Latitude:', body.results[0].geometry.location.lat)
        console.log('Longitude:', body.results[0].geometry.location.lng)
    }
});