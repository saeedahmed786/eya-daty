const express = require('express');
const { AuthenticatorJWT, isAdmin } = require('../middlewares/authenticator');
const upload = require('../middlewares/multer');
const { getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../controllers/categoryController');


const router = express.Router();

router.get('/get', getAllCategories);
router.post('/create', upload.single('file'), AuthenticatorJWT, isAdmin, createCategory);
router.post('/edit/:id', getCategoryById);
router.put('/update/:id', upload.single('file'), AuthenticatorJWT, isAdmin, updateCategory);
router.delete('/delete/:id', AuthenticatorJWT, isAdmin, deleteCategory);


module.exports = router;