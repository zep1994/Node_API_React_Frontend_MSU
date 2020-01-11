const express = require('express')
const router = express.Router()
const request = require('request')

let options = {
    host: 'https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6',
    port: 3001,
    site_id: 'site_id=8488',
    key: 'key=0b8da796b00334ae3471f60e6a10e8c6',
    method: 'GET'
}

console.log(options)

let reqGet = request(options.host, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            console.log(body)
        }
    }) 
module.exports = reqGet

// let request = require('request')
// request('https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6', function (err, res, body) {
//     if (!err && res.statusCode == 200) {
//         console.log(body)
//     }
// }) 
