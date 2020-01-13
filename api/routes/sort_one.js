const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let reqGetOnebySearch = router.get('/guides/?id=:id', (req, res, next) =>{

        const base_url = 'https://lgapi-us.libapps.com/1.1/guides/'
        let id = req.params.id
        let auth = '?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6'
        let new_url = base_url + id + auth
        console.log(new_url)
        console.log(req.params.id)
        fetch(new_url)  
        .then(res => res.json())
        .then(data => {
            res.render('index', {
                items: data,
                path: '/guides/?id=:id',
            })
            res.json(data)
        })
        .catch(err => console.log(err))
    })

module.exports = reqGetOnebySearch