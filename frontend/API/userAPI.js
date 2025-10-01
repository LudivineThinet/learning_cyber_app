const BASE_URL = process.env.EXPO_PUBLIC_API_URL; // Remplace par ton IP locale si tu testes sur un vrai téléphone

// Fonction pour inscrire un utilisateur
export const signup = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // Vérifie si la réponse est OK
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de l’inscription');
    }

    // Retourne les données JSON du serveur
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur API signup:', error.message);
    throw error;
  }
};
