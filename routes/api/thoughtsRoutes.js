const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

//tells the server to get the data from the database and post new data to the same database 
router.route('/').get(getAllThoughts).post(createThought);


router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
    .delete(deleteReaction); //added to fix reaction delete issue

//same as line 13, uses router variable and route method to tell it which path to grab data from and add a reaction 
router.route("/:thoughtId/reactions").post(addReaction);


//uses router variable and route method to tell it which path to grab data from and delete a reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;    