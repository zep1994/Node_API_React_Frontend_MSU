const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let reqGetOnebySearch = router.get('/', (req, res, next) =>{

        const base_url = 'https://lgapi-us.libapps.com/1.1/guides/577970?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6&update_type=1'
        console.log(base_url)
        fetch(base_url)  
        .then(res => res.json())
        .then(data => {
            res.render('landingPage', {
                item: data,
                path: '/',
            })
            res.json(data)
        })
        .catch(err => console.log(err))
    })

module.exports = reqGetOnebySearch