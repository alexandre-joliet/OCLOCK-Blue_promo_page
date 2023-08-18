const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');

router.get('/', mainController.showHomepage);

// On créé une route pour afficher la liste des étudiants
router.get('/students', mainController.showStudents);

// On créé une route pour afficher le détail d'un étudiant
router.get('/students/:githubUsername', mainController.showStudent);


module.exports = router;