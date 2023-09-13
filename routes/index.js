const router = require('express').Router();
const postRoutes = require('./thoughtRoute');
const userRoutes = require('./userRoute');

router.use('/posts', thoughtRoute);
router.use('/users', userRouts);

module.exports = router;
