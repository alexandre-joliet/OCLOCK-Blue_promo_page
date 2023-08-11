// ##############################
// --- Imports ---
// #########################
// On importe express
const express = require('express');

// On initialise le server dans une variable
const app = express();

// On importe la liste des étudiants
const students = require('./students');

// On importe les détails de la promo
const promo = require('./promo');


// ##############################
// --- Routes ---
// #########################
// On créé une route pour la page d'accueil
app.get('/', (req, res) => {
  res.send(createHomePage());
});

// On créé une route pour afficher la liste des étudiants
app.get('/students', (req, res) => {
  res.send(createStudentListPage(students));
});

// On créé une route pour afficher le détail d'un étudiant
app.get('/students/:githubUsername', (req, res) => {

});


// ##############################
// --- Bind & Listen ---
// #########################
// On branche notre server au port 3000 et on lui demande d'écouter les requêtes entrantes vers ce port
app.listen(3001);


// ##############################
// --- Functions ---
// #########################
/**
 * createHomePage()
 * 
 * Génère la page d'accueil de notre site
 */
function createHomePage() {
  const html = 
  `
    <h1>${promo.name}</h1>

    <p>Il y a ${students.length} apprenants dans cette promo</p>
    <p>Cette promo est animée par ${promo.prof} et ${promo.helper}</p>

    <a href="/students">Voir la liste des étudiants</a>
  
  `;
  return html;
}


/**
 * createStudentListPage(studentList)
 * 
 * Génère la page avec la liste des étudiants de la promo
 */
function createStudentListPage(studentList) {
  let html = 
  `<ul>`;

  for (const student of studentList) {
    html += 
    `
    <li>
      <a href="">${student.firstname} - ${student.lastname} - ${student.pseudoGithub}</a>
    </li>
    `;
  }

  html += '</ul>';

  return html;
}


/**
 * createProfilePage(studentList, pseudo)
 * 
 * Génère la page profil d'un étudiant
 */


// let html2 = "<ul>";

//     for(let index = 1, index < 5, index++) {
//       html2 += `<li>item ${index}</li>`;
//     }