const Clinic = require('../models/clinicModel');
const Notification = require('../models/notificationModel');
const Favourite = require('../models/favouriteModel');


exports.getAllClinics = async (req, res) => {
    const clinics = await Clinic.find().limit(10).populate("user");
    if (clinics) {
        res.status(200).json(clinics);
    }
    else {
        res.status(404).json({ errorMessage: 'No clinic found!' });
    }
}

exports.getLimitedClinics = async (req, res) => {
    const PAGE_SIZE = 10;
    const page = req.params.page || "0";
    console.log(req.params.page)
    const clinics = await Clinic.find().limit(PAGE_SIZE).skip(PAGE_SIZE * page).populate("user").exec();
    const count = await Clinic.countDocuments({});
    if (clinics) {
        res.status(200).json({ clinics, count });
    }
    else {
        res.status(404).json({ errorMessage: 'No clinic found!' });
    }
}

exports.getClinicByUserId = async (req, res) => {
    const clinic = await Clinic.findOne({ user: req.params.id }).populate("user");
    if (clinic) {
        res.status(200).json(clinic);
    }
    else {
        res.json({ errorMessage: 'No clinic found!' });
    }
}

exports.getClinicById = async (req, res) => {
    const clinic = await Clinic.findOne({ _id: req.params.id }).populate("user");
    if (clinic) {
        res.status(200).json(clinic);
    }
    else {
        res.status(404).json({ errorMessage: 'No clinic found!' });
    }
}

exports.searchClinics = async (req, res) => {
    const state = req.query.state;
    const clinicName = req.query.clinicName;
    const city = req.query.city;
    const gender = req.query.gender;
    const services = req.query.service;
    const sortBy = req.query.sortBy;
    const specialisation = req.query.specialisation;

    console.log(clinicName)

    // Build the query object
    const query = { $and: [] };
    if (state) {
        query.$and.push({ state: state });
    }
    if (clinicName) {
        query.$and.push({ clinicName: { $regex: clinicName, $options: "i" } });
    }
    if (city) {
        query.$and.push({ city: city });
    }
    if (specialisation) {
        query.$and.push({ specialisation: specialisation });
    }
    if (gender) {
        query.$and.push({ gender: gender });
    }
    if (services) {
        query.$and.push({ 'services': services });
    }

    // const query = {
    //     $and: [
    //         { specialisation: { $regex: specialisation, $options: "i" } },
    //         { state: { $regex: state, $options: "i" } },
    //         { city: { $regex: city, $options: "i" } },
    //         { gender: { $regex: gender, $options: "i" } },
    //         { specialisation: { $regex: specialisation, $options: "i" } },
    //         { services: { $elemMatch: { services } } },
    //     ]
    // };

    Clinic.find(query)
        // .sort({ sortBy: 1 })
        .exec((error, results) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.json(results);
            }
        });
}

exports.getAllNotifications = async (req, res) => {
    const notification = await Notification.find().populate("user");
    if (notification) {
        res.status(200).json(notification);
    }
    else {
        res.status(300).json({ errorMessage: 'No notification found!' });
    }
}

exports.addClinic = async (req, res) => {
    const findClinic = await Clinic.findOne({ user: req.user._id });
    if (findClinic) {
        findClinic.type = req.body.type;
        findClinic.firstName = req.body.firstName;
        findClinic.lastName = req.body.lastName;
        findClinic.email = req.body.email;
        findClinic.phone = req.body.phone;
        findClinic.phoneTwo = req.body.phoneTwo;
        findClinic.fax = req.body.fax;
        findClinic.gpsData = req.body.gpsData;
        findClinic.clinicName = req.body.clinicName;
        findClinic.experience = req.body.experience;
        findClinic.facebookLink = req.body.facebookLink;
        findClinic.specialisation = req.body.specialisation;
        findClinic.notes = req.body.notes;
        findClinic.services = req.body.services;
        findClinic.owner = req.body.owner;
        findClinic.schedule = req.body.schedule;
        findClinic.bio = req.body.bio;
        findClinic.picture = req.body.profileFile;
        findClinic.gender = req.body.gender;
        findClinic.pictures = req.body.filesList;

        const saveClinic = await findClinic.save();
        if (saveClinic) {
            res.status(200).json({ successMessage: 'Clinic saved', clinic: saveClinic });
        } else {
            res.status(400).json({ errorMessage: 'Clinic could not be saved. Please try again' });
        }
    } else {
        const clinic = new Clinic({
            user: req.user._id,
            picture: req.body.picture,
            type: req.body.type,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            phoneTwo: req.body.phoneTwo,
            fax: req.body.fax,
            gpsData: req.body.gpsData,
            clinicName: req.body.clinicName,
            experience: req.body.experience,
            facebookLink: req.body.facebookLink,
            specialisation: req.body.specialisation,
            notes: req.body.notes,
            services: req.body.services,
            owner: req.body.owner,
            schedule: req.body.schedule,
            bio: req.body.bio,
            picture: req.body.profileFile,
            gender: req.body.gender,
            state: req.body.state,
            city: req.body.city,
            pictures: req.body.filesList,
        });

        const saveClinic = await clinic.save();
        if (saveClinic) {
            const newNotification = new Notification({
                text: `created a new page`,
                user: req.user._id,
                link: "/admin/pages"
            });
            await newNotification.save((error, notif) => {
                if (error) {
                    res.status(200).json({ successMessage: 'Clinic added', clinic: saveClinic });
                    res.status(400).json({ errorMessage: 'Notification error', error });
                }
                else {
                    res.status(200).json({ successMessage: "Notification Added", notif });
                }
            })
        } else {
            res.status(400).json({ errorMessage: 'Clinic could not be added. Please try again' });
        }
    }
}


exports.adminAddClinic = async (req, res) => {
    const clinic = new Clinic({
        user: req.user._id,
        picture: req.body.picture,
        type: req.body.type,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        phoneTwo: req.body.phoneTwo,
        fax: req.body.fax,
        gpsData: req.body.gpsData,
        clinicName: req.body.clinicName,
        experience: req.body.experience,
        facebookLink: req.body.facebookLink,
        specialisation: req.body.specialisation,
        notes: req.body.notes,
        services: req.body.services,
        owner: req.body.owner,
        schedule: req.body.schedule,
        bio: req.body.bio,
        picture: req.body.profileFile,
        gender: req.body.gender,
        category: req.body.category,
        status: req.body.status,
        paidStatus: req.body.paidStatus,
        pictures: req.body.filesList,
        state: req.body.state,
        city: req.body.city,
    });

    const saveClinic = await clinic.save();
    if (saveClinic) {
        const newNotification = new Notification({
            text: `created a new page`,
            user: req.user._id,
            link: "/admin/pages"
        });
        await newNotification.save((error, notif) => {
            if (error) {
                res.status(200).json({ successMessage: 'Clinic added', clinic: saveClinic });
                res.status(400).json({ errorMessage: 'Notification error', error });
            }
            else {
                res.status(200).json({ successMessage: "Notification Added", notif });
            }
        })
    } else {
        res.status(400).json({ errorMessage: 'Clinic could not be added. Please try again' });
    }
}



exports.updateClinic = async (req, res) => {
    console.log(req.params)
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        findClinic.type = req.body.type;
        findClinic.firstName = req.body.firstName;
        findClinic.lastName = req.body.lastName;
        findClinic.email = req.body.email;
        findClinic.phone = req.body.phone;
        findClinic.phoneTwo = req.body.phoneTwo;
        findClinic.fax = req.body.fax;
        findClinic.gpsData = req.body.gpsData;
        findClinic.clinicName = req.body.clinicName;
        findClinic.experience = req.body.experience;
        findClinic.facebookLink = req.body.facebookLink;
        findClinic.specialisation = req.body.specialisation;
        findClinic.notes = req.body.notes;
        findClinic.services = req.body.services;
        findClinic.status = req.body.status;
        findClinic.paidStatus = req.body.paidStatus;
        findClinic.category = req.body.category;
        findClinic.owner = req.body.owner;
        findClinic.schedule = req.body.schedule;
        findClinic.bio = req.body.bio;
        findClinic.picture = req.body.profileFile;
        findClinic.gender = req.body.gender;
        findClinic.pictures = req.body.filesList;

        const saveClinic = await findClinic.save();
        if (saveClinic) {
            res.status(200).json({ successMessage: 'Clinic saved', clinic: saveClinic });
        } else {
            res.status(400).json({ errorMessage: 'Clinic could not be saved. Please try again' });
        }
    } else {
        res.status(404).json({ errorMessage: 'clinic not found.' })
    }
}

exports.updateViews = async (req, res) => {
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        Clinic.updateOne(
            { _id: req.params.id },
            {
                $addToSet: { views: req.body.userId }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "View Not Updated" })
                } else {
                    res.status(200).json({ successMessage: "View Updated" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'clinic not found.' })
    }
}

exports.updateFavourites = async (req, res) => {
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        Clinic.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { favourites: req.body.userId } },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Favourite Not Updated" })
                } else {
                    res.status(200).json({ successMessage: "Favourite Updated" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Clinic not found.' })
    }
}


exports.addRecommendation = async (req, res) => {
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        Clinic.updateOne(
            { _id: req.params.id },
            {
                $addToSet: { recommendations: req.user._id }
            },
            function (error, success) {
                console.log(error, success)
                if (error) {
                    res.status(200).json({ errorMessage: "Clinic Recommendations Not Updated" })
                } else {
                    res.status(200).json({ successMessage: "Clinic Recommendation Updated" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Clinic not found.' })
    }
}

exports.removeRecommendation = async (req, res) => {
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        Clinic.updateOne(
            { _id: req.params.id },
            {
                $pull: { recommendations: req.user._id }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Clinic Recommendations Not removed" })
                } else {
                    res.status(200).json({ successMessage: "Clinic Recommendations removed" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Clinic not found.' })
    }
}

exports.addNotRecommendations = async (req, res) => {
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        Clinic.updateOne(
            { _id: req.params.id },
            {
                $addToSet: { notrecommendations: req.user._id }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Clinic Notrecommendations Not Updated" })
                } else {
                    res.status(200).json({ successMessage: "Clinic Notrecommendations Updated" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Clinic not found.' })
    }
}

exports.removeNotRecommendations = async (req, res) => {
    const findClinic = await Clinic.findOne({ _id: req.params.id });
    if (findClinic) {
        Clinic.updateOne(
            { _id: req.params.id },
            {
                $pull: { notrecommendations: req.user._id }
            },
            function (error, success) {
                if (error) {
                    res.status(200).json({ errorMessage: "Clinic Notrecommendations Not removed" })
                } else {
                    res.status(200).json({ successMessage: "Clinic Notrecommendations removed" })
                }
            });
    } else {
        res.status(404).json({ errorMessage: 'Clinic not found.' })
    }
}


exports.deleteClinic = async (req, res) => {
    const clinic = await Clinic.findOne({ _id: req.params.id });
    if (clinic) {
        clinic.remove();
        res.status(200).json({ successMessage: "Deleted successfully" });
    }
    else {
        res.status(404).json({ errorMessage: 'No clinic found!' });
    }
}




/**************** Favourites ***********/


exports.addFavourite = async (req, res) => {
    const findFavourite = await Favourite.findOne({ page: req.params.id, user: req.user._id });
    console.log(findFavourite)
    if (findFavourite) {
        res.status(200).json({ successMessage: 'Favourite added', favourite: findFavourite });
    } else {
        const favourite = new Favourite({
            user: req.user._id,
            page: req.params.id,
        });

        const saveFavourite = await favourite.save();
        if (saveFavourite) {
            res.status(200).json({ successMessage: 'Favourite added', favourite: saveFavourite });
        } else {
            res.status(400).json({ errorMessage: 'Favourite could not be added. Please try again' });
        }
    }
}


exports.getAllFavouritesByPageId = async (req, res) => {
    const favourite = await Favourite.find({ page: req.params.id }).populate("user page");
    if (favourite) {
        res.status(200).json(favourite);
    }
    else {
        res.status(404).json({ errorMessage: 'No favourite found!' });
    }
}

exports.getAllFavouritesByUserId = async (req, res) => {
    const PAGE_SIZE = 10;
    const page = req.params.page || "0";
    console.log(req.params.page)
    const favourites = await Favourite.find({ user: req.user._id }).limit(PAGE_SIZE).skip(PAGE_SIZE * page).populate("user page").exec();
    const count = await Favourite.countDocuments({});
    if (favourites) {
        res.status(200).json({ favourites, count });
    }
    else {
        res.status(404).json({ errorMessage: 'No favourite found!' });
    }
}

exports.deleteFavourite = async (req, res) => {
    const favourite = await Favourite.findOne({ page: req.params.id, user: req.user._id });
    if (favourite) {
        favourite.remove();
        res.status(200).json({ successMessage: "Deleted successfully" });
    }
    else {
        res.status(404).json({ errorMessage: 'No favourite found!' });
    }
}
