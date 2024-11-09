import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes.js'; // Import the grouped routes
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import Partie from './modules/partie/models/partie.model.js';
import { attaque } from './modules/joueur/services/joueur.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

mongoose
    .connect('mongodb://localhost:27017/myexam2023')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
app.use('/', apiRoutes);

const server = http.createServer(app);
const io = new Server(server);
io.on('connection', async (socket) => {
    console.log('A user connected');
    try {
        const allParties = await Partie.find();

        socket.emit('allParties', allParties);
    } catch (err) {
        console.error('Error fetching messages:', err);
    }

    socket.on('envoyer', async (data) => {
        const { joueur_1, joueur_2 } = data;
        await attaque(joueur_1, joueur_2);
        const partie = new Partie(data);
        const savedPartie = await partie.save();
        io.emit('envoyer', savedPartie);
    });
    socket.on('stats', async () => {
        try {
            const parties = await Partie.find()
                .populate('joueur_1 joueur_2')
                .lean();

            socket.emit('stats', parties);
        } catch (err) {
            console.error('Error fetching messages:', err);
        }
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
