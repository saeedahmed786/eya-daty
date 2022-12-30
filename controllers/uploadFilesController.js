const cloudinary = require('../middlewares/cloudinary');
const cloudinaryConfig = require('../middlewares/cloudinaryConfig');
const fs = require("fs");

exports.uploadFiles = async (req, res) => {
    if (req.files) {
        console.log(req.files)
        const uploader = async (path) => await cloudinary.uploads(path, 'Eyadaty')
        const { path } = req.files[0];
        const newPath = await uploader(path)
        console.log(newPath)
        fs.unlinkSync(path);
        res.status(200).json(newPath) 
    } else {
        res.status(400).json({ errorMessage: 'Files could not be uploaded.' });
    }
}

exports.deleteFile = async (req, res) => {
    if (req.body.file) {
        let file = req.body.file;
        await cloudinaryConfig.uploader.destroy(file.id);
        res.status(200).json({ successMessage: 'File deleted successfully' })
    } else {
        res.status(400).json({ errorMessage: 'File could not be deleted.' });
    }
} 