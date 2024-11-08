import {
    getAllparties,
    getpartieById,
    createpartie,
    updatepartie,
    deletepartie,
} from '../services/partie.service.js';

export const getparties = async (req, res) => {
    try {
        const parties = await getAllparties();
        res.status(200).json(parties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getpartie = async (req, res) => {
    try {
        const partie = await getpartieById(req.params.id);
        if (!partie) {
            return res.status(404).json({ message: 'partie not found' });
        }
        res.status(200).json(partie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createpartieHandler = async (req, res) => {
    const partieDTO = req.body;
    const { joueur_1, joueur_2 } = req.params;
    console.log(partieDTO);

    try {
        const partie = await createpartie({
            nom: partieDTO.nom,
            joueur_1,
            joueur_2,
        });
        res.status(201).send(partie);
    } catch (error) {
        console.log('Error creating partie');

        res.status(400).json({ error: error.message });
    }
};

export const updatepartieHandler = async (req, res) => {
    const partieDTO = req.body;

    try {
        const partie = await updatepartie(req.params.id, partieDTO);
        if (!partie) {
            return res.status(404).json({ message: 'partie not found' });
        }
        res.status(200).json(partie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletepartieHandler = async (req, res) => {
    try {
        const partie = await deletepartie(req.params.id);
        if (!partie) {
            return res.status(404).json({ message: 'partie not found' });
        }
        res.status(200).json({ message: 'partie deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
