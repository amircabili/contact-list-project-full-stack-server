const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

router.post('/contacts/test', ContactController.testPost);

router.post('/contacts/add', ContactController.addContact);

router.get('/contacts', ContactController.getAllContacts);

router.put('/contacts/update/:id', ContactController.updateContact);

router.delete('/contacts/delete/:id', ContactController.deleteContact);

router.delete('/contacts/clear', ContactController.clearContacts);

router.get('/initial-data', ContactController.getInitialData);

router.get('/contacts/count', ContactController.getContactCount);

module.exports = router;
