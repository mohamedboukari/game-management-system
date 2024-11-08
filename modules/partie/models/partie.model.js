import mongoose from 'mongoose';

const { Schema } = mongoose;

const PartieSchema = new Schema(
    {
        nom: { type: String, required: true },
        joueur_1: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Joueur',
            required: true,
        },
        joueur_2: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Joueur',
            required: true,
        },
        etat: String,
    },
    {
        timestamps: true,
    }
);

const Partie = mongoose.model('Partie', PartieSchema);

export default Partie;
