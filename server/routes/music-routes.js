var Music = require('../models/song')
var router = require('express').Router()


router.get('/api/songs', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.get('/api/songs/:id', (req, res, next) => {
    Songs.findById(req.params.id)
        .then(song => {
            res.send(song)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

router.post('/api/songs', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            let response = {
                data: song,
                message: 'Successfully got song'
            }
            res.send(response)
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})


router.put('/api/songs/:id', (req, res, next) => {
    var action = 'Update song'
    Songs.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            res.send(handleResponse(action, data))
        })
        .catch(err => {
            res.status(400).send(handleResponse(action, null, err))
        })
})


router.delete('/api/songs/:id', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(() => {
            res.send({ message: 'RIP Music' })
        })
        .catch(err => {
            res.status(400).send({ Error: err })
        })
})

function handleResponse(action, data, error) {
    var response = {
        message: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}


module.exports = router