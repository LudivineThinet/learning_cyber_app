import bcrypt from 'bcryptjs';
import User from '../models/User.js'; // modèle Mongoose User

// Inscription utilisateur
export const signupUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Vérifier si tous les champs sont présents
    if (!email || !username || !password) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs' });
    }

    // Vérifier si l'email existe déjà
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Un compte existe déjà avec cet email' });
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: 'Utilisateur créé avec succès',
      user: {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      },
    });
  } catch (error) {
    console.error('Erreur lors de l’inscription:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
