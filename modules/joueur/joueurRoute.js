import express from 'express';
import {
    getjoueursHandler,
    getjoueurHandler,
    createjoueurHandler,
    updatejoueurHandler,
    deletejoueurHandler,
    getjoueurByNameHandler,
    attaqueHandler,
} from './controllers/joueur.controller.js';

const joueurRoutes = express.Router();

joueurRoutes.get('/', getjoueursHandler);
joueurRoutes.get('/:id', getjoueurHandler);
joueurRoutes.get('/:name', getjoueurByNameHandler);
joueurRoutes.post('/', createjoueurHandler);
joueurRoutes.put('/:id', updatejoueurHandler);
joueurRoutes.put('/:j1/:j2', attaqueHandler);

joueurRoutes.delete('/:id', deletejoueurHandler);

export default joueurRoutes;
