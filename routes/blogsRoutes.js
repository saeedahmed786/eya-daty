const express = require('express');
const { getAllBlogs, getBlogById, getBlogByUserId, addBlog, updateBlog, deleteBlog, getLimitedBlogs, getLimitedBlogsByCategory } = require('../controllers/blogsController');
const { AuthenticatorJWT } = require('../middlewares/authenticator');

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/limited/:page', getLimitedBlogs);
router.post('/category/limited/:page', getLimitedBlogsByCategory);
router.get('/get/:id', getBlogById);
router.get('/user/:id', AuthenticatorJWT, getBlogByUserId);
router.post('/add', AuthenticatorJWT, addBlog);
router.put('/update/:id', AuthenticatorJWT, updateBlog);
router.delete('/delete/:id', AuthenticatorJWT, deleteBlog);

module.exports = router;