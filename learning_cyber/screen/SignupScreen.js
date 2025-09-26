import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (!email || !username || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // TODO : Appel API Express
    Alert.alert('Succès', 'Compte créé avec succès !');
    navigation.navigate('Login');
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

        <Text style={styles.title}>Inscription</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(230,241,255,0.6)"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Pseudo"
          placeholderTextColor="rgba(230,241,255,0.6)"
          value={username}
          onChangeText={setUsername}
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
            pressed && { opacity: 0.8, shadowRadius: 12 },
          ]}
          onPress={handleSignup}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </Pressable>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Déjà un compte ? Connecte-toi</Text>
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
  marginTop: -97,
  marginBottom: 20,
  textAlign: 'center',
},
});
