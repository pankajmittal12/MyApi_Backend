const express = require('express');

const controller = require('../Controllers/controller');

const router = express.Router();

const app = express();

app.use(express.json());

router.get('/getData', controller.getData);

router.post('/postData', controller.postData)

module.exports = router;