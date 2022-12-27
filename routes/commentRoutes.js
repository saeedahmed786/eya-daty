const express = require('express');
const { getCommentsById, postComment, deleteComment, addLike, removeLike, removeDisLike, addDisLike } = require('../controllers/commentController');
const { AuthenticatorJWT } = require('../middlewares/authenticator');

const router = express.Router();

router.get('/get/:id', getCommentsById);
router.post('/add', AuthenticatorJWT, postComment);
router.put('/like/:id', AuthenticatorJWT, addLike);
router.put('/remove/like/:id', AuthenticatorJWT, removeLike);
router.put('/dislike/:id', AuthenticatorJWT, addDisLike);
router.put('/remove/dislike/:id', AuthenticatorJWT, removeDisLike);
router.delete('/delete/:id', AuthenticatorJWT, deleteComment);


module.exports = router;