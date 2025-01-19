const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
  router.get('/', contactsController.getAll);

  router.get('/:id', contactsController.getSingle);

const getContact = (req, res) => {
    res.render('contact', { title: 'Contact' });
  };

  module.exports = { getContact };
