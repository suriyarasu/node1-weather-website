const request = require('request')

const getForecast = (address, callback) => {

const url = 'http://api.weatherstack.com/current?access_key=e3cbcfa21eeb4a7d636693601cce1eba&query='+address+'&units=f'

request({url, json: true}, (err, res) => {
    
    if(err){
         callback('Address is missing', undefined)
    }else if(res.body.error){
        callback(undefined, 'Location not found. try another location')
    }else{
       const data = res.body.current.weather_descriptions[0] + '. it is currently ' + res.body.current.temperature +' fran out. It is feels like ' + res.body.current.feelslike + ' degree out there' 
       callback(undefined, data) 
        }
    })
}

module.exports = {
    getForecast : getForecast
} 

