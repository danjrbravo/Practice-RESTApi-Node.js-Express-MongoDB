const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')

//Get all
router.get('/', async (req,res) => {
    try{
        const contacts = await Contact.find()
        res.json(contacts)
    }catch (err) {
        res.status(500).json({ message: err.message})
    }
})
//Get one
router.get('/:id',(req,res) => {
    res.send(req.params.id)
})
//Create one
router.post('/',async (req,res) => {
    const contact = new Contact({
        name: req.body.name, 
        contactNumber: req.body.contactNumber 
    })
    try {
        const newContact = await contact.save()
        res.status(201).json(newContact)
    }catch (err){
        res.status(400).json({ message: err.message})
    }
})
//Updating one
router.patch('/',(req,res) => {

})
//Deleting one
router.delete('/',(req,res) => {

})

module.exports = router