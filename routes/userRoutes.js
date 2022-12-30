const express = require('express');
const upload = require('../middlewares/multer');
const { signUp, login, resetPasswordLink, updatePassword, updateUser, getUserById, getAllUsers, getLimitedUsers, googleLogin, facebookLogin, contactUs } = require('../controllers/userController');
const { AuthenticatorJWT } = require('../middlewares/authenticator');

const router = express.Router();

router.get('/', AuthenticatorJWT, getAllUsers);
router.get('/limited/:page', AuthenticatorJWT, getLimitedUsers);
router.post('/signup', upload.single('file'), signUp);
router.post('/login', login);
router.get('/get/:id', AuthenticatorJWT, getUserById);
router.post('/update-profile', AuthenticatorJWT, updateUser);
router.post('/reset-password', resetPasswordLink);
router.post('/update-password', updatePassword);

router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);

router.post('/contactUs', contactUs);

module.exports = router;