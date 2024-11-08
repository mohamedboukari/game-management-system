import express from 'express';
import joueurRoutes from '../modules/joueur/joueurRoute.js';
import partieRoutes from '../modules/partie/partieRoute.js';
import partieViewRoutes from './view/partieView.js';

const router = express.Router();

router.use('/api/joueur', joueurRoutes);
router.use('/api/partie', partieRoutes);
router.use('/partieView', partieViewRoutes);

export default router;
