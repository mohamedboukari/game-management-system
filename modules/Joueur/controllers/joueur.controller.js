import {
    getAlljoueurs,
    getjoueurById,
    createjoueur,
    updatejoueur,
    deletejoueur,
    getjoueurByName,
    attaque,
} from '../services/joueur.service.js';

export const getjoueursHandler = async (_req, res) => {
    try {
        const joueurs = await getAlljoueurs();
        res.status(200).json(joueurs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getjoueurHandler = async (req, res) => {
    try {
        const joueur = await getjoueurById(req.params.id);
        if (!joueur) {
            return res.status(404).json({ message: 'joueur not found' });
        }
        res.status(200).json(joueur);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const getjoueurByNameHandler = async (req, res) => {
    try {
        const joueur = await getjoueurByName(req.params.name);
        if (!joueur) {
            return res.status(404).json({ message: 'joueur not found' });
        }
        res.status(200).json(joueur);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createjoueurHandler = async (req, res) => {
    const joueurDTO = req.body;

    try {
        const joueur = await createjoueur(joueurDTO);
        res.status(201).json(joueur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatejoueurHandler = async (req, res) => {
    const joueurDTO = req.body;

    try {
        const joueur = await updatejoueur(req.params.id, joueurDTO);
        if (!joueur) {
            return res.status(404).json({ message: 'joueur not found' });
        }
        res.status(200).json(joueur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const attaqueHandler = async (req, res) => {
    const { j1, j2 } = req.params;

    try {
        const joueur = await attaque(j1, j2);
        if (!joueur) {
            return res.status(404).json({ message: 'joueur not found' });
        }
        res.status(200).json(joueur);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletejoueurHandler = async (req, res) => {
    try {
        const joueur = await deletejoueur(req.params.id);
        if (!joueur) {
            return res.status(404).json({ message: 'joueur not found' });
        }
        res.status(200).json({ message: 'joueur deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
