const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
//Ask Rene, where do these /users, /thoughts get pulled from? 

module.exports = router;