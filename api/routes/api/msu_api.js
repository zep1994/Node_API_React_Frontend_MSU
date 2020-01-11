const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let reqGet = router.get('/', (req, res, next) =>{
        const base_url = 'https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6'
        fetch(base_url)  
        .then(res => res.json())
        .then(data => {
            res.send({ data })
        })
        .catch(err => console.log(err))
    })

module.exports = reqGet

// let request = require('request')
// request('https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6', function (err, res, body) {
//     if (!err && res.statusCode == 200) {
//         console.log(body)
//     }
// }) 
