const Contact = require('../models/contact');

exports.testPost = async (req, res) => {
    try {
        console.log("Received POST request with data:", req.body);
        res.status(200).json({ message: "POST request received successfully", data: req.body });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to process POST request' });
    }
};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
};

exports.addContact = async (req, res) => {
    try {
        const { full_name, full_address, phone, cell, email, date, age, image } = req.body;
        const newContact = new Contact({ full_name, full_address, phone, cell, email, date, age, image });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add contact' });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContactData = req.body;
        const updatedContact = await Contact.findByIdAndUpdate(id, updatedContactData, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(updatedContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update contact' });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ error: 'Contact not found' });
        }
        res.status(200).json(deletedContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete contact' });
    }
};

exports.clearContacts = async (req, res) => {
    try {
        await Contact.deleteMany({});
        res.status(200).json({ message: 'Contacts collection cleared successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to clear contacts collection' });
    }
};

exports.getInitialData = async (req, res) => {
    try {
        const initialData = await Contact.find();
        res.status(200).json(initialData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch initial data' });
    }
};

exports.getContactCount = async (req, res) => {
    try {
        const count = await Contact.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch contact count' });
    }
};
