const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

// Fonction Login
export const login = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erreur lors de la connexion');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur API login:', error.message);
    throw error;
  }
};
