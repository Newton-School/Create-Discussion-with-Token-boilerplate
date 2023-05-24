const router = require('express').Router();

router.use('/discussion/', require('./discussionRoutes'));
router.use('/user', require('./userRoutes'));

module.exports = router;