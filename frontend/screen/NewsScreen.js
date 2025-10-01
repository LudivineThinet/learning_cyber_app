import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Linking, ActivityIndicator } from 'react-native';
import { XMLParser } from 'fast-xml-parser';

export default function NewsScreen() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRSS = async () => {
      try {
        const res = await fetch('https://thehackernews.com/feeds/posts/default');
        const text = await res.text();

        const parser = new XMLParser({ ignoreAttributes: false, removeNSPrefix: true });
        const data = parser.parse(text);

        // Vérifie si data.feed.entry existe
        let items = [];
        if (data.feed?.entry) {
          if (Array.isArray(data.feed.entry)) {
            items = data.feed.entry;
          } else {
            items = [data.feed.entry]; // si une seule entrée
          }
        }

        setArticles(items);
      } catch (error) {
        console.error('Erreur RSS:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRSS();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Chargement des news...</Text>
      </View>
    );
  }

  if (articles.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Aucune news trouvée.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(item.link?.["@_href"] || '#')}
          >
            {item.title}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  link: {
    fontSize: 16,
    marginBottom: 10,
    color: 'blue',
  },
});
