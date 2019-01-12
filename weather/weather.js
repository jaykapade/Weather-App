const request = require('request');
const yargs = require('yargs');

    request({
        url:"https://api.darksky.net/forecast/ec3f86226b5c2e3e2ee93cfde9864c93/37.8267,-122.4233",
        json: true
    },(error,response,body)=>{
        console.log(JSON.stringify(body, undefined, 2));
    });
