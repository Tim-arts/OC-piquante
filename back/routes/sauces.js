// Création d'un nouvel objet router pour faire des chemins différents
const express = require('express');
const router = express.Router();

/**
 * Import de auth pour faire une vérification du token/id de l'utilisateur sur chaque route
 * Import de multer pour permettre de gérer les images lors de la création/modification de sauce
 */
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const saucesCtrl = require('../controllers/sauces');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;
