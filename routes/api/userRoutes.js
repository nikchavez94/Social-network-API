const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

//api/users 
router.route('/').get(getAllUsers).post(createUser);

//api/users/:id
router.route("/:id").get(getUsersById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);


module.exports = router;    