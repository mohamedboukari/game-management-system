import Partie from '../models/partie.model.js';
export const getAllparties = async () => {
    const parties = await Partie.find().lean();
    return parties;
};

export const getpartieById = async (id) => {
    const partie = await Partie.findById(id).lean();

    return partie;
};

export const createpartie = async (partieData) => {
    const newpartie = new Partie(partieData);
    const savedpartie = await newpartie.save();
    return savedpartie;
};

export const updatepartie = async (id, partieData) => {
    return await Partie.findByIdAndUpdate(id, partieData, { new: true });
};

export const deletepartie = async (id) => {
    return await Partie.findByIdAndDelete(id);
};
