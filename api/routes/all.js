const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let reqGet = router.get('/guides', (req, res, next) =>{

        const base_url = 'https://lgapi-us.libapps.com/1.1/guides/?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6'
        fetch(base_url)  
        .then(res => res.json())
        .then(data => {
            res.render('index', {
                items: data,
                path: '/guides',
                link: base_url + data.id
            })
            res.json(data)
        })
        .catch(err => console.log(err))
    })

module.exports = reqGet