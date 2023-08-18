const notFound = (req, res) => {
  const path = req.path;
  res.status(404).render('notFound', {path});
};


module.exports = notFound;