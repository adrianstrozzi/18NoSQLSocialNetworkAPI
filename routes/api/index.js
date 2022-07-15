const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');

router.use('/userRoutes', userRoutes);
router.use('/thoughtsRoutes', thoughtsRoutes);

module.exports = router;
