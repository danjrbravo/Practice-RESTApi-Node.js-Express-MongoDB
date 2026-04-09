const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    contactDate:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Contact',contactSchema)
