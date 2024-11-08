import Joueur from '../models/joueur.model.js';
export const getAlljoueurs = async () => {
    const joueurs = await Joueur.find();
    return joueurs;
};

export const getjoueurById = async (id) => {
    const joueur = await Joueur.findById(id).lean();
    return joueur;
};
export const getjoueurByName = async (name) => {
    const joueur = await Joueur.findOne({ pseudo: name }).lean();
    return joueur;
};

export const createjoueur = async (joueurData) => {
    const newjoueur = new Joueur({
        pseudo: joueurData.pseudo,
        sante: 100,
        score: 0,
    });
    const savedjoueur = await newjoueur.save();
    return savedjoueur;
};

export const updatejoueur = async (id, joueurData) => {
    return await Joueur.findByIdAndUpdate(id, joueurData, { new: true });
};
export const attaque = async (j1, j2) => {
    const joueur1 = await Joueur.findByIdAndUpdate(
        j1,
        {
            $inc: { score: 10 },
        },
        { new: true }
    );
    const joueur2 = await Joueur.findByIdAndUpdate(
        j2,
        {
            $inc: { sante: -20 },
        },
        { new: true }
    );
    return { joueur1, joueur2 };
};
export const deletejoueur = async (id) => {
    return await Joueur.findByIdAndDelete(id);
};
