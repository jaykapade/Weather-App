const request = require('request');
const yargs = require('yargs');

function getDetails(address,api,callback){
    request({
        url:"https://maps.googleapis.com/maps/api/geocode/json?address=" +encodeURIComponent(address)+"&key="+api,
        json: true
    },(error,response,body)=>{
        //console.log(JSON.stringify(body, undefined, 2));
        if(error){
            callback('Unable to connect to Google server');
        }
        else if(body.status==="ZERO_RESULT"){
            callback('Unable to find address');
        }
        else if(body.status==="OVER_QUERY_LIMIT"){
            callback('Change API key');
        }else if(body.status==="REQUEST_DENIED"){
            callback('Change API key');
        }
        else if(body.status==="OK"){
            callback(undefined,{
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        }
    });
}
module.exports={
    getDetails
};