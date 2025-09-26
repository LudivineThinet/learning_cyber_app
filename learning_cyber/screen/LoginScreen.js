import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Pressable , Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient'; // pour le fond dégradé

export default function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!identifier || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // TODO : Appel API Express
    Alert.alert('Succès', 'Connexion réussie !');
  };

  return (
    <LinearGradient colors={['#0a0f1f', '#0f2b4c']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>

       
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

        <Text style={styles.title}>Connexion</Text>

        <TextInput
          style={styles.input}
          placeholder="Pseudo ou Email"
          placeholderTextColor="rgba(230,241,255,0.6)"
          value={identifier}
          onChangeText={setIdentifier}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="rgba(230,241,255,0.6)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable
          style={({ pressed }) => [
            styles.buttonContainer,
            pressed && { opacity: 0.8, shadowRadius: 12 }, // effet press
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </Pressable>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Pas de compte ? Inscrivez-vous ici</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#E6F1FF',
    textShadowColor: 'rgba(0, 255, 150, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#00ff9f',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#E6F1FF',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  link: {
    marginTop: 15,
    color: '#E6F1FF',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#00ff9f',
    borderRadius: 8,
    paddingVertical: 12,
    shadowColor: '#00ff9f',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#0a0f1f',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
  width: 350 ,
  height: 300,
  marginTop: -150,
  marginBottom: 20,
  textAlign: 'center',
},
});

