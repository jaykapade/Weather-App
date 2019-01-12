const geocode=require('./geocode/geocode.js');
var api="AIzaSyDzuihcUCBCqE7PTFHFY44oImAsOO1sraQ";
const yargs = require('yargs');
const argv=yargs
.options({
    a: {
        demand : true,
        alias : 'address',
        describe : 'Address to fetch weather for ',
        string : true
    }
}).help().alias('help','h').argv;

geocode.getDetails(yargs.argv.address,api,(errorMessage, Result)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log('Address:', Result.address);
        console.log('Latitude:', Result.lat)
        console.log('Longtitude:', Result.lng)
    }
});
