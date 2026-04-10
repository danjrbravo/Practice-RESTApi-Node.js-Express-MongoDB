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
router.get('/:id',getContact,(req,res) => {
    res.send(res.contact)
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
router.patch('/:id',getContact,async (req,res) => {
    if(req.body.name != null){
        res.contact.name = req.body.name
    }
    if(req.body.contactNumber != null){
        res.contact.contactNumber = req.body.contactNumber
    }
    try{
        const updatedContact = await res.contact.save()
        res.json({updatedContact})
    }catch(err){
        res.status(400).json({message: err.message})
    }
})
//Deleting one
router.delete('/:id',getContact, async(req,res) => {
    try{
        await res.contact.deleteOne()
        res.json({message: 'Deleted Contact'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//Middleware
async function getContact(req,res,next) {
    let contact
    try{
        contact = await Contact.findById(req.params.id)
        if (contact == null){
            res.status(404).json({message: 'Cannot find contact'})
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }
    res.contact = contact
    next()
}
module.exports = router