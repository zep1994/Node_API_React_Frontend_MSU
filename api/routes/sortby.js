const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

let reqSort = router.get('/guides/sortby/:sort_by/', (req, res, next) =>{
        console.log(req.params.sort_by)
        let sort_by = (req.params.sort_by)
        const base_url = 'https://lgapi-us.libapps.com/1.1/guides/'
        let auth = '?site_id=8488&key=0b8da796b00334ae3471f60e6a10e8c6'
        const sort = '&sort_by='
        const expand = '&expand='
        let new_url = base_url + auth + sort + sort_by + expand
        console.log(new_url)
        fetch(new_url)   
        .then(res => res.json())
        .then(data => {
            res.render('index', {
                items: data,
                path: '/guides/sortby/:sort_by',
                link: `${base_url}${data.id}${auth}`
            })
            res.json(data)
        })
        .catch(err => console.log(err))
    })

module.exports = reqSort