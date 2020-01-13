const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let reqSortByType = router.get('/guides/guide_types/:guide', (req, res, next) =>{

        const base_url = 'https://lgapi-us.libapps.com/1.1/guides/'
        let guide = req.params.guide
        let auth = '?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6'
        const guide_types = '&guide_types='
        let new_url = base_url + auth + guide_types + guide
        console.log(new_url)
        console.log(req.params.id)
        fetch(new_url)  
        .then(res => res.json())
        .then(data => {
            res.render('index', {
                items: data,
                path: '/guides/:id',
                link: `${base_url}${data.id}${auth}`
            })
            res.json(data)
        })
        .catch(err => console.log(err))
    })

module.exports = reqSortByType