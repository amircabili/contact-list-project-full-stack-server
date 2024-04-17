
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    // id: String,
    full_name: String,
    full_address: String,
    phone: String,
    cell: String,
    email: String,
    date: String,
    age: String,
    image: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
