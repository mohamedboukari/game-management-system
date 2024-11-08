import express from 'express';
import {
    getparties,
    getpartie,
    createpartieHandler,
    updatepartieHandler,
    deletepartieHandler,
} from './controllers/partie.controller.js';

const partieRoutes = express.Router();

partieRoutes.get('/', getparties);
partieRoutes.get('/:id', getpartie);
partieRoutes.post('/:joueur_1/:joueur_2', createpartieHandler);
partieRoutes.put('/:id', updatepartieHandler);
partieRoutes.delete('/:id', deletepartieHandler);

export default partieRoutes;
