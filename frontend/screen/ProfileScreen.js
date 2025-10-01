import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {

  // Fonction pour déconnecter l'utilisateur
  const logout = async () => {
    try {
      // Supprime le token stocké après le login
      await AsyncStorage.removeItem('token');

      // Redirige vers l'écran Login et vide la pile de navigation
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>

      {/* Bouton pour se déconnecter */}
      <Button title="Déconnexion" onPress={logout} color="#FF3333" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
