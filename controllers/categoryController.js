const Category = require('../models/categoryModel');
const cloudinary = require('../middlewares/cloudinary');
const cloudinaryConfig = require('../middlewares/cloudinaryConfig');
const fs = require("fs");



exports.getAllCategories = async (req, res) => {
    Category.find({})
        .exec((error, categories) => {
            if (error) {
                res.status(404).json({ errorMessage: 'Error in finding categories' });
            }
            if (categories) {
                res.status(200).send(categories);
            }
        });
}


exports.createCategory = async (req, res) => {
    const uploader = async (path) => await cloudinary.uploads(path, 'Eyadaty/Categories');
    const { path } = req.file;
    const uploadedObject = await uploader(path);
    fs.unlinkSync(path);

    const category = new Category({
        name: req.body.name,
        file: uploadedObject
    });

    const newCategory = category.save();
    if (newCategory) {
        res.status(200).json({ successMessage: `Category ${req.body.name} created successfully` });
    } else {
        res.status(400).json('Category is not created. Please Try Again')
    }
}

exports.getCategoryById = async (req, res) => {
    const editCategory = await Category.findById({ _id: req.params.id });
    if (editCategory) {
        res.status(200).json({ editCategory });
    }
    else {
        res.status(400).json({ errorMessage: 'Category not found. Please try again' });
    }
}

exports.updateCategory = async (req, res) => {
    const findCategory = await Category.findById({ _id: req.params.id });
    console.log(findCategory)
    if (findCategory) {
        if (req.file) {
            await cloudinaryConfig?.uploader?.destroy(findCategory?.file?.id);

            const uploader = async (path) => await cloudinary.uploads(path, 'Eyadaty/Categories');
            const { path } = req.file;
            const uploadedObject = await uploader(path);
            fs.unlinkSync(path);

            findCategory.name = req.body.name;
            findCategory.file = uploadedObject;
            const newCategory = findCategory.save();
            if (newCategory) {
                res.status(200).json({ successMessage: `Category updated successfully` });
            } else {
                res.status(400).json({ errorMessage: 'Category not updated. Please try again' })
            }
        } else {
            findCategory.name = req.body.name;

            const newCategory = findCategory.save();
            if (newCategory) {
                res.status(200).json({ successMessage: `Category updated successfully` });
            } else {
                res.status(400).json({ errorMessage: 'Category not updated. Please try again' })
            }
        }
    }
    else {
        res.status(400).json({ errorMessage: 'Category not found. Please try again' });
    }
}

exports.deleteCategory = async (req, res) => {
    const findCategory = await Category.findById({ _id: req.params.id })
    if (findCategory) {
        await cloudinaryCon.uploader?.destroy(findCategory?.file?.id);
        findCategory.remove();
        res.status(200).json({ successMessage: `Category ${findCategory.name} has been deleted successfully` });
    } else {
        res.status(400).json({ errorMessage: 'Category could not be deleted. Please try again' });
    }
}
