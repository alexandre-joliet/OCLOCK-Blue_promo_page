const students = require('../../data/students');

const mainController = {

  showHomepage: ((req, res) => {
    const path = req.path;
    res.render('homepage', {path});
  }),
  
  showStudents: ((req, res) => {
    const path = req.path;
    console.log(path);
    res.render('students', {students, path});
  }),

  showStudent: ((req, res) => {
    const path = req.path;
    const pseudo = req.params.githubUsername;
    console.log(path);
    console.log(pseudo);
    res.render('student', {students, pseudo, path});
  })


};


module.exports = mainController;