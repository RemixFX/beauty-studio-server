const db = require('../db');

 const postEntry = (req, res, next) => {
  const { name, phone, service, category, date, time } = req.body;
  db.query(
    'INSERT INTO entries (name, phone, service, category, date, time) VALUES ($1, $2, $3, $4, $5, $6)',
    [name, phone, service, category, date, time],
  )
    .then(() => {
      res.status(200).send({ message: `создана запись на ${date} в ${time}` })
      console.log(`создана запись на ${date} в ${time}`)
    })
    .catch((err) => {
      console.log(err)
      /* next(err) */
    })
};

 const getEntries = (req, res, next) => {
  db.query(
    'SELECT * FROM entries ORDER BY date')
    .then((entries) => res.status(200).json(entries.rows))
    .catch((err) => {
      console.log(err)
      /* next(err) */
    })
};

module.exports = { postEntry, getEntries }