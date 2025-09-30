import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // ajout de CORS
import userRoutes from './routes/userRoutes.js'; 
import authRoutes from './routes/authRoutes.js'; 

dotenv.config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Activer CORS pour Expo Web et React (8081 et 3000)
app.use(cors({
  origin: ['http://localhost:8081', 'http://localhost:3000']
}));

console.log('CORS activé pour http://localhost:8081 et http://localhost:3000');

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_CONNECTION)
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.log('Erreur MongoDB :', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); 

// Lancer le serveur
app.listen(3000, () => console.log('Server started on http://localhost:3000'));
