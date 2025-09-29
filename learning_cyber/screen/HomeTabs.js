import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen';
import ExerciceScreen from './ExerciceScreen';
import LessonsScreen from './LessonsScreen';
import NewsScreen from './NewsScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({ //Style de la barre d'onglets 
        headerShown: false,
        tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,

        tabBarIcon: ({ focused, color, size }) => { //Style de l'icone
          let iconName;
          switch (route.name) {
            case 'Profil':
              iconName = focused ? 'person-circle' : 'person-circle-outline';
              break;
            case 'Exercice':
              iconName = focused ? 'barbell' : 'barbell-outline';
              break;
            case 'Lessons':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'News':
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} style={{ marginBottom: 5 }} />;
        },
      })}
    >
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Exercice" component={ExerciceScreen} />
      <Tab.Screen name="Lessons" component={LessonsScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
}

const styles = {
  tabBarStyle: {
    backgroundColor: '#0f2b4c',
    borderTopWidth: 0,
    height: 80,
    paddingTop: 10,     // descend tout le contenu
    paddingBottom: 10,  // espace pour touches tactiles
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,    // descend le texte légèrement
  },
  tabBarActiveTintColor: { color: '#00ff9f' },
  tabBarInactiveTintColor: { color: '#E6F1FF' },
};

