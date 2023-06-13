const router = require('express').Router();
const { getEntries, postEntry } = require('../controllers/enlist')

router.get('/entries', getEntries)
router.post('/entries', postEntry)

router.use('*', (req, res, next) => {
  next(console.log('запрашиваемый ресурс не найден'));
});


module.exports = router;