const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/73a0a30b953e7f65cb8a103d8ada6e27/'+ latitude + ',' + longitude + '?units=si'
    
    
    request({ url, json: true}, (error, {body} ) => {
        if(error){
            callback('Unable to connect to Weather App', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined, body.daily.data[0].summary +  ' It is currently ' + body.currently.temperature + ' degrees out. Today maximum Temp. is  ' + body.daily.data[0].temperatureHigh + ' and minimum Temp. is ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast