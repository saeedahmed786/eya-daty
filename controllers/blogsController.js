const Blog = require('../models/blogsModel');


exports.getAllBlogs = async (req, res) => {
    const blogs = await Blog.find().limit(20).populate("user").sort({ createdAt: -1 });
    if (blogs) {
        res.status(200).json(blogs);
    }
    else {
        res.status(404).json({ errorMessage: 'No blog found!' });
    }
}

exports.getLimitedBlogs = async (req, res) => {
    const PAGE_SIZE = 10;
    const page = req.params.page || "0";
    const blogs = await Blog.find().limit(PAGE_SIZE).skip(PAGE_SIZE * page).populate("user").sort({ createdAt: -1 });
    const count = await Blog.countDocuments({});
    if (blogs) {
        res.status(200).json({ blogs, count });
    }
    else {
        res.status(404).json({ errorMessage: 'No blog found!' });
    }
}

exports.getLimitedBlogsByCategory = async (req, res) => {
    const PAGE_SIZE = 10;
    const page = req.params.page || "0";
    const blogs = await Blog.find({ category: req.body.category }).limit(PAGE_SIZE).skip(PAGE_SIZE * page).populate("user").sort({ createdAt: -1 });
    const count = await Blog.countDocuments({ category: req.body.category });
    if (blogs) {
        res.status(200).json({ blogs, count });
    }
    else {
        res.status(404).json({ errorMessage: 'No blog found!' });
    }
}
exports.searchBlogs = async (req, res) => {
    const searchTerm = req.query.term;
    Blog.find({ title: { $regex: searchTerm, $options: "i" } })
        .sort({ price: 1 })
        .exec((error, results) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(results);
            }
        });
}

exports.getBlogByUserId = async (req, res) => {
    const blogs = await Blog.find({ user: req.params.id }).populate("user").sort({ createdAt: -1 });
    if (blogs) {
        res.status(200).json(blogs);
    }
    else {
        res.status(404).json({ errorMessage: 'No blogs found!' });
    }
}

exports.getBlogById = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id }).populate("user");
    if (blog) {
        res.status(200).json(blog);
    }
    else {
        res.status(404).json({ errorMessage: 'No blog found!' });
    }
}

exports.addBlog = async (req, res) => {
    const blog = new Blog({
        user: req.user._id,
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        picture: req.body.picture,
    });

    const saveBlog = await blog.save();
    if (saveBlog) {
        res.status(200).json({ successMessage: 'Blog added', blog: saveBlog });
    } else {
        res.status(400).json({ errorMessage: 'Blog could not be added. Please try again' });
    }
}



exports.updateBlog = async (req, res) => {
    console.log(req.params)
    const findBlog = await Blog.findOne({ _id: req.params.id });
    if (findBlog) {
        findBlog.category = req.body.category;
        findBlog.description = req.body.description;
        findBlog.title = req.body.title;
        findBlog.picture = req.body.picture;

        const saveBlog = await findBlog.save();
        if (saveBlog) {
            res.status(200).json({ successMessage: 'Blog saved', blog: saveBlog });
        } else {
            res.status(400).json({ errorMessage: 'Blog could not be saved. Please try again' });
        }
    } else {
        res.status(404).json({ errorMessage: 'Blog not found.' })
    }
}


exports.deleteBlog = async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id });
    if (blog) {
        blog.remove();
        res.status(200).json({ successMessage: "Deleted successfully" });
    }
    else {
        res.status(404).json({ errorMessage: 'No blog found!' });
    }
}