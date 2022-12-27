const express = require('express');
const { AuthenticatorJWT, isAdmin } = require('../middlewares/authenticator');
const { addClinic, getAllClinics, getClinicById, getClinicByUserId, updateViews, updateFavourites, addRecommendation, addNotRecommendations, removeNotRecommendations, removeRecommendation, updateClinic, deleteClinic, adminAddClinic, getAllNotifications, getLimitedClinics, getAllFavouritesByPageId, deleteFavourite, addFavourite, getAllFavouritesByUserId } = require('../controllers/clinicController');

const router = express.Router();

router.post('/add', AuthenticatorJWT, addClinic);
router.post('/admin/add', AuthenticatorJWT, isAdmin, adminAddClinic);
router.get('/', getAllClinics);
router.get('/limited/:page', getLimitedClinics);
router.get('/user/:id', AuthenticatorJWT, getClinicByUserId);
router.get('/get/:id', getClinicById);
router.post('/update/:id', AuthenticatorJWT, isAdmin, updateClinic);
router.delete('/delete/:id', AuthenticatorJWT, isAdmin, deleteClinic);
router.post('/views/:id', AuthenticatorJWT, updateViews);
router.post('/favourites/:id', AuthenticatorJWT, updateFavourites);
router.put('/recommend/:id', AuthenticatorJWT, addRecommendation);
router.put('/remove/recommend/:id', AuthenticatorJWT, removeRecommendation);
router.put('/notrecommend/:id', AuthenticatorJWT, addNotRecommendations);
router.put('/remove/notrecommend/:id', AuthenticatorJWT, removeNotRecommendations);

router.get('/notifications', AuthenticatorJWT, isAdmin, getAllNotifications);

router.get('/favourite/:id', getAllFavouritesByPageId);
router.get('/user/favourite/:page', AuthenticatorJWT, getAllFavouritesByUserId);
router.post('/favourite/add/:id', AuthenticatorJWT, addFavourite);
router.delete('/delete/favourite/:id', AuthenticatorJWT, deleteFavourite);

module.exports = router; 