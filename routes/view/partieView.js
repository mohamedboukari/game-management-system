import express from 'express';

const partieViewRoutes = express.Router();

partieViewRoutes.get('/', (req, res) => {
    res.render('partie.twig');
});

export default partieViewRoutes;
