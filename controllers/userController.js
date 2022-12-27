const User = require('../models/userModel');
var bcrypt = require('bcryptjs');
const config = require('../config/keys');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const Template = require('../email-template');
const crypto = require('crypto');
const sendEmail = require('../nodemailer');
const cloudinary = require('../middlewares/cloudinary');
const cloudinaryConfig = require('../middlewares/cloudinaryConfig');
const fetch = require('node-fetch');
const { OAuth2Client } = require('google-auth-library');
const googleClient = new OAuth2Client(config.googleClient);



exports.getAllUsers = async (req, res) => {
    const users = await User.find().limit(20);
    if (users) {
        res.status(200).json(users);
    }
    else {
        res.status(404).json({ errorMessage: 'No user found!' });
    }
}

exports.getLimitedUsers = async (req, res) => {
    const PAGE_SIZE = 10;
    const page = req.params.page || "0";
    const users = await User.find().limit(PAGE_SIZE).skip(PAGE_SIZE * page).exec();
    const count = await User.countDocuments({});

    if (users) {
        res.status(200).json({ users, count });
    }
    else {
        res.status(404).json({ errorMessage: 'No user found!' });
    }
}

exports.getUserById = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ errorMessage: 'No user found!' });
    }
}

exports.signUp = async (req, res) => {
    const ifEmailAlreadyPresent = await User.findOne({ email: req.body.email });
    if (ifEmailAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Email already exists. Please try another one.' });
    }
    else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            email: req.body.email,
            password: hash
        });

        const saveUser = await user.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'Account created successfuly!. Please Sign in.' });
        } else {
            res.status(400).json({ errorMessage: 'Account not created. Please try again' });
        }
    }
}


exports.login = async (req, res) => {
    const user = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.email }]
    });

    if (user) {
        const checkPassword = bcrypt.compareSync(req.body.password, user.password);
        if (checkPassword) {
            const payload = {
                user: {
                    _id: user._id,
                    role: user.role
                }
            }
            jwt.sign(payload, config.jwtSecret, (err, token) => {
                if (err) res.status(400).json({ errorMessage: 'Jwt Error' });
                else {
                    user.password = null;
                    res.status(200).json({ user, token, successMessage: 'Logged In Successfully' });
                }
            });
        } else {
            res.status(201).json({ errorMessage: 'Incorrect username or password.' })
        }

    } else {
        res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }
}



exports.updateUser = async (req, res) => {
    const findUser = await User.findOne({ _id: req.user._id });
    if (findUser) {
        if (req.file) {
            const imgUrl = findUser?.picture?.id;
            imgUrl && await cloudinaryConfig.uploader.destroy(imgUrl);
            const { path } = req.file;
            const uploading = await cloudinary.uploads(path, 'Eyadaty/User');
            imageUpload = uploading;
            await fs.unlinkSync(path);

            findUser.fullName = req.body.name;
            findUser.email = req.body.email;
            findUser.phone = req.body.phone;
            findUser.city = req.body.city;
            findUser.state = req.body.state;
            findUser.dob = req.body.dob;
            findUser.gender = req.body.gender;
            findUser.picture = imageUpload;

            const saveUser = await findUser.save();
            if (saveUser) {
                res.status(200).json({ successMessage: 'User Updated Successfully', user: findUser })
            } else (
                res.status(400).json({ errorMessage: 'User could not be Updated.' })
            )
        }
        else {
            findUser.fullName = req.body.name;
            findUser.email = req.body.email;
            findUser.phone = req.body.phone;
            findUser.city = req.body.city;
            findUser.state = req.body.state;
            findUser.dob = req.body.dob;
            findUser.gender = req.body.gender;

            const saveUser = await findUser.save();
            if (saveUser) {
                res.status(200).json({ successMessage: 'User Updated Successfully', user: findUser })
            } else (
                res.status(400).json({ errorMessage: 'User could not be Updated.' })
            )
        }
    } else {
        res.status(404).json({ errorMessage: 'User not found.' })
    }
}


exports.resetPasswordLink = async (req, res) => {
    crypto.randomBytes(32, (error, buffer) => {
        if (error) {
            console.log(error);
        }
        const token = buffer.toString("hex");
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                res.status(201).json({ errorMessage: 'Email does not exist' });
            } else {
                user.resetToken = token;
                user.expireToken = Date.now() + 3600000;
                user.save((err, result) => {
                    if (err) {
                        res.status(400).json({ errorMessage: 'Token saving failed' });
                    }
                    if (result) {
                        let url = '';
                        if (process.env.NODE_ENV === 'production') {
                            url = `http://eyadaty.com/reset-password/${token}`
                        } else {
                            url = `http://localhost:3000/reset-password/${token}`
                        }
                        sendEmail(req.body.email, "Password Reset Link", Template({ name: user.email, text: "Please click on this link to change your password", buttonText: "Change Password", link: url }))
                        res.status(200).json({ successMessage: 'Check your Inbox!' });
                    }
                })
            }
        })
    })
}

exports.updatePassword = async (req, res) => {
    if (req.body.password !== req.body.confirm) {
        res.status(400).json({ errorMessage: 'Passwords do not match.' })
    }
    else {
        await User.findOne({ resetToken: req.body.token, expireToken: { $gt: Date.now() } }).then(user => {
            if (!user) {
                res.status(201).json({ errorMessage: 'Try again. Session expired!' });
            }
            if (user) {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);
                user.password = hash;
                user.resetToken = '',
                    user.expireToken = '',
                    user.save((error, result) => {
                        if (error) {
                            res.status(400).json({ errorMessage: 'Failed to update password' });
                        } else {
                            res.status(200).json({ successMessage: 'Password updated Successfully.' })
                        }
                    })
            }
        });
    }
}




/******************************************************** Third-Party Login ***************************************/
// Google Login
exports.googleLogin = async (req, res) => {
    const { idToken } = req.body;
    console.log(idToken)
    if (idToken) {
        googleClient
            .verifyIdToken({ idToken, audience: config.googleClient })
            .then(response => {
                const { email_verified, name, email } = response.payload;
                if (email_verified) {
                    User.findOne({ email }).exec((err, user) => {
                        if (user) {
                            const payload = {
                                user: {
                                    _id: user._id,
                                    role: user.role
                                }
                            }
                            jwt.sign(payload, config.jwtSecret, (err, token) => {
                                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })
                                user.password = null;
                                return res.status(200).json({
                                    user,
                                    token,
                                    successMessage: 'Logged In Successfully',
                                });
                            });
                        } else {
                            let password = email + config.jwtSecret;
                            user = new User({ fullName: name, email, password });
                            user.save((err, data) => {
                                if (err) {
                                    console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                                    return res.status(400).json({
                                        error: 'User signup failed with google'
                                    });
                                }
                                const payload = {
                                    user: {
                                        _id: data._id,
                                        role: data.role
                                    }
                                }
                                jwt.sign(payload, config.jwtSecret, (err, token) => {
                                    if (err) res.status(400).json({ errorMessage: 'Jwt Error' })
                                    data.password = null;
                                    res.json({
                                        token,
                                        user: data,
                                        successMessage: 'Logged In Successfully'
                                    });
                                })

                            });
                        }
                    });
                } else {
                    return res.status(400).json({
                        error: 'Google login failed. Try again'
                    });
                }
            });
    }
}

exports.facebookLogin = (req, res) => {
    const { userID, accessToken } = req.body;
    const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

    return (
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => {
                const { email, name } = response;
                User.findOne({ email }).exec((err, user) => {
                    if (user) {
                        const payload = {
                            user: {
                                _id: user._id,
                                role: user.role
                            }
                        }
                        jwt.sign(payload, config.jwtSecret, (err, token) => {
                            if (err) res.status(400).json({ errorMessage: 'Jwt Error' })
                            user.password = null;
                            res.status(200).json({
                                user,
                                token,
                                successMessage: 'Logged In Successfully',
                            });
                        });
                    } else {
                        let password = email + config.jwtSecret;
                        user = new User({ firstName: name, email, password });
                        user.save((err, data) => {
                            if (err) {
                                console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
                                return res.status(400).json({
                                    error: 'User signup failed with facebook'
                                });
                            }
                            const payload = {
                                user: {
                                    _id: data._id,
                                    role: data.role
                                }
                            }
                            jwt.sign(payload, config.jwtSecret, (err, token) => {
                                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })
                                data.password = null;
                                res.json({
                                    token,
                                    user: data,
                                    successMessage: 'Logged In Successfully'
                                });
                            })
                        });
                    }
                });
            })
            .catch(error => {
                res.json({
                    error: 'Facebook login failed. Try later'
                });
            })
    );
}