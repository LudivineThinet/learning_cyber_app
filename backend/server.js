import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // ajout de CORS
import userRoutes from './routes/userRoutes.js'; // import ES Modules

dotenv.config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Activer CORS pour Expo Web (front sur 8081)
app.use(cors({
  origin:  'http://localhost:8081' 
}));

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_CONNECTION)
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.log('Erreur MongoDB :', err));

// Routes
app.use('/api/users', userRoutes);

// Lancer le serveur
app.listen(3000, () => console.log('Server started on http://localhost:3000'));
