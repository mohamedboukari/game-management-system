import mongoose from 'mongoose';

const { Schema } = mongoose;

const JoueurSchema = new Schema(
    {
        pseudo: { type: String, required: true },
        sante: { type: Number, required: true },
        score: { type: Number, required: true },
    },

    {
        timestamps: true,
    }
);

const Joueur = mongoose.model('Joueur', JoueurSchema);

export default Joueur;
