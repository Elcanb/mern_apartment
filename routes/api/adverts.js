import express from 'express';

import Advert from '../../models/Advert'

const router = express.Router();

// @route   GET api/adverts/
router.get('/', (req, res) => {
    Advert.find()
        .sort({ date: -1 })
        .then(adverts => res.json(adverts));
});

// @route   GET api/adverts/search
router.get('/search', (req, res) => {
    const result = {};

    for (let k in req.query) {
        if (req.query[k] !== "") {
            result[k] = req.query[k];
        }
    }

    Advert.find(result)
        .then(adverts => res.json(adverts));
});

// @route   GET api/adverts/id
router.get('/:id', (req, res) => {
    Advert.findById(req.params.id)
        .then(advert => res.json(advert))
        .catch(error => res.status(400).json({ msg: 'Not Found' }))
});

// @route   POST api/adverts/
router.post('/', (req, res) => {
    const newAdvert = new Advert({
        location: req.body.location,
        price: req.body.price,
        room: req.body.room,
        floor: req.body.floor,
        square: req.body.square
    });

    newAdvert.save().then(advert => res.json(advert));
});

// @route   DELETE api/adverts/id
router.delete('/:id', (req, res) => {
    Advert.findById(req.params.id)
        .then(advert => advert.remove().then(() => res.json({ success: true })))
        .catch(error => res.status(404).json({ success: false }))
});


export default router;