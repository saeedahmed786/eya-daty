const Comment = require('../models/commentModel');


exports.getCommentsById = async (req, res) => {
    await Comment.find({ pageId: req.params.id }).populate("commentor").exec((err, result) => {
        if (result) {
            return res.status(200).json(result);
        }
        else {
            return res.status(404).json({ errorMessage: 'No Comments found' });
        }
    });
}

exports.postComment = async (req, res) => {
    const newComment = new Comment({
        text: req.body.text,
        commentor: req.user._id,
        pageId: req.body.pageId,
        responseTo: req.body.responseTo,
        timeOfSubmit: req.body.timeOfSubmit,
    });
    await newComment.save((error, comment) => {
        if (error) {
            res.status(400).json({ errorMessage: 'comments posting error', error });
        }
        else {
            res.status(200).json({ successMessage: "Comment Added", comment });
        }
    })
}

exports.addLike = async (req, res) => {
    const findComment = await Comment.findOne({ _id: req.params.id });
    if (findComment) {
        Comment.updateOne(
            { _id: req.params.id },
            {
                $push: { likes: req.user._id }
            },
            function (error, success) {
                console.log(error, success)
                if (error) {
                    res.status(200).json({ errorMessage: "Comment Likes Not Updated" })
                } else {
                    res.status(200).json({ successMessage: "Comment Likes Updated" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Comment not found.' })
    }
}

exports.removeLike = async (req, res) => {
    const findComment = await Comment.findOne({ _id: req.params.id });
    if (findComment) {
        Comment.updateOne(
            { _id: req.params.id },
            {
                $pull: { likes: req.user._id }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Comment Likes Not removed" })
                } else {
                    res.status(200).json({ successMessage: "Comment Likes removed" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Comment not found.' })
    }
}

exports.addDisLike = async (req, res) => {
    const findComment = await Comment.findOne({ _id: req.params.id });
    if (findComment) {
        Comment.updateOne(
            { _id: req.params.id },
            {
                $addToSet: { dislikes: req.user._id }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Comment Dislikes Not Updated" })
                } else {
                    res.status(200).json({ successMessage: "Comment Dislikes Updated" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Comment not found.' })
    }
}

exports.removeDisLike = async (req, res) => {
    const findComment = await Comment.findOne({ _id: req.params.id });
    if (findComment) {
        Comment.updateOne(
            { _id: req.params.id },
            {
                $pull: { dislikes: req.user._id }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Comment Dislikes Not removed" })
                } else {
                    res.status(200).json({ successMessage: "Comment Dislikes removed" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Comment not found.' })
    }
}


exports.deleteComment = async (req, res) => {
    Comment.findOneAndDelete({ _id: req.params.id }).exec((error, result) => {
        if (error) res.status(400).json({ errorMessage: 'Failed to delete Comment' });
        else {
            result.remove();
            res.status(200).send({ successMessage: "Comment Deleted" });
        }
    })
}
