const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const PofileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.get('/sessions', SessionController.create)
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.get('/profile', PofileController.index);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;