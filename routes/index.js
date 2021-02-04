const router = require('express').Router();

const apiRoutes = require('./api');
const commentRoutes = require('./comment-routes');

router.use('/api', apiRoutes);
router.use('/comments', commentRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
