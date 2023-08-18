// ##############################
// --- Imports ---
// #########################

// On importe express
const express = require('express');

// On initialise le server dans une variable
const app = express();

const PORT = 3000;

const router = require('./app/router');
const notFound = require('./app/middlewares/notFound');


// ##############################
// --- Settings ---
// #########################

// On dit à Express d'utiliser EJS comme moteur de rendu
app.set('view engine', 'ejs');

// On dit à Express où aller chercher nos views
app.set('views', './views');

// On dit à Express d'utiliser nos assets static
app.use(express.static('public'));


// ##############################
// --- Routes ---
// #########################

app.use(router);

app.use(notFound);


// ##############################
// --- Listen ---
// #########################

// On branche notre server au port 3000 et on lui demande d'écouter les requêtes entrantes vers ce port
app.listen(PORT, () => {
  console.log(`Server is listening to @http://localhost${PORT}`);
});