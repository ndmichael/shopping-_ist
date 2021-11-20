const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');
const auth = require('../../middleware/auth');

//  @route  GET api/items
// @desc  Get all items
// @access public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

//  @route  POSTapi/items
// @desc  POST all items
// @access private
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

//  @route  Delete api/items
// @desc  Delete all items
// @access private
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});

module.exports = router;